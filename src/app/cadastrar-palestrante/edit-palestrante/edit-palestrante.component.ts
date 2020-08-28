import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Palestrante } from 'src/app/models/palestrante.model';
import { PalestranteService } from 'src/app/services/palestrante.service';


@Component({
  selector: 'app-edit-palestrante',
  templateUrl: './edit-palestrante.component.html',
  styleUrls: ['./edit-palestrante.component.scss']
})
export class EditPalestranteComponent implements OnInit {
  idEvento: string;
  porcentagemEnvio: Observable<number>;
  url: Observable<string>;
  palestrante: Palestrante;
  imagem: File;
  idPalestrante: string;


  formPalestrante = new FormGroup({
    nome: new FormControl(null,[Validators.required]),
    sobrenome: new FormControl(null,[Validators.required]),

  });

  constructor(public router: Router,
    private storage: AngularFireStorage,
    public palestranteService: PalestranteService,
    public activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.idPalestrante = this.activatedRoute.snapshot.paramMap.get('id');

    this.palestrante = await this.palestranteService.get(this.idPalestrante);
    this.formPalestrante.patchValue(this.palestrante);

  }

  async editar() {

  this.formPalestrante.disable();

    const palestranteeditado = this.formPalestrante.value as Palestrante;

    if (this.palestrante.imagem) {
      const refImagem = this.storage.storage.refFromURL(this.palestrante.imagem);
      await refImagem.delete();
    }

    if (this.imagem) {
      palestranteeditado.imagem = await this.enviarImagem();
    }
    palestranteeditado.id = this.palestrante.id;
    await this.palestranteService.update(palestranteeditado);
    console.log(this.idEvento);
    this.router.navigate(["/home/palestrantes", this.palestrante.idEvento]);
  

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

