import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/evento.model';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  idEvento: string;
  porcentagemEnvio: Observable<number>;
  url: Observable<string>;
  evento: Evento;
  imagem: File;

  formularioEvento = new FormGroup({
    nomeEvento: new FormControl(null, [Validators.required]),
    descricaoEvento: new FormControl(null, [Validators.required]),
  });

  constructor(public router: Router,
public appService: AppService,
  private storage: AngularFireStorage,
  public activatedRoute: ActivatedRoute) { }

 async ngOnInit() {
  this.idEvento = this.activatedRoute.snapshot.paramMap.get('id');
  
   this.evento = await this.appService.get(this.idEvento);
   this.formularioEvento.patchValue(this.evento);
  
}
 
 async editar() {
 const eventoeditado = this.formularioEvento.value as Evento;

 if (this.evento.imagem){
const refImagem = this.storage.storage.refFromURL(this.evento.imagem);
await refImagem.delete();
 }

 if (this.imagem){
  eventoeditado.imagem = await this.enviarImagem();
  }
eventoeditado.id = this.evento.id;
 await this.appService.update(eventoeditado);
this.router.navigate(['listaEventos']);

}

uploadFile(event) {
  this.imagem = event.target.files[0];

}
enviarImagem(): Promise<string> {

  return new Promise<string>((resolve) => {

      const nomeArquivo = Math.floor(Math.random() * 100000).toString();
      const fileRef = this.storage.ref(nomeArquivo);
      const task = this.storage.upload(nomeArquivo, this.imagem);

      this.porcentagemEnvio = task.percentageChanges();

      task.snapshotChanges()
          .pipe(finalize(() => {
              fileRef.getDownloadURL().subscribe(url => resolve(url));
          }))
          .subscribe();

  });
}
}

