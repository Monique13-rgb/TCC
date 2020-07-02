import { Component, OnInit } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Evento } from "../models/evento.model";
import { Observable } from "rxjs";
import { finalize, map } from "rxjs/operators";
import { AngularFireStorage } from "@angular/fire/storage";
import { AppService } from '../services/app.service';
@Component({
  selector: "app-adicionar-eventos",
  templateUrl: "./adicionar-eventos.component.html",
  styleUrls: ["./adicionar-eventos.component.scss"],
})
export class AdicionarEventosComponent implements OnInit {
  eventos: Observable<Evento[]>;
  porcentagemEnvio: Observable<number>;
  url: Observable<string>;
  evento: Evento;
  imagem: File;

  
  formularioEvento = new FormGroup({
    nomeEvento: new FormControl(null, [Validators.required]),
    descricaoEvento: new FormControl(null, [Validators.required]),
    imagem: new FormControl(null),
  });

  constructor(
    public appService: AppService,
    private storage: AngularFireStorage,
    public router: Router
  ) {}

  async ngOnInit() {}

  async adicionar() {
   const novoEvento = this.formularioEvento.value as Evento;

    if (this.imagem){
    novoEvento.imagem = await this.enviarImagem();
    }
   this.evento = await this.appService.add(novoEvento); 
    this.router.navigate(["/home/listaEventos"]);
  
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
