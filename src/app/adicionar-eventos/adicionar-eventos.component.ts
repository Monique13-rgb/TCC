import { Component, OnInit } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { AppService } from "../app.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Evento } from "../models/evento.model";
import { Observable } from "rxjs";
import { finalize, map } from "rxjs/operators";
import { AngularFireStorage } from "@angular/fire/storage";
@Component({
  selector: "app-adicionar-eventos",
  templateUrl: "./adicionar-eventos.component.html",
  styleUrls: ["./adicionar-eventos.component.scss"],
})
export class AdicionarEventosComponent implements OnInit {
  eventos: Observable<Evento[]>;
  porcentagemEnvio: Observable<number>;
  url: Observable<string>;

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
    const salvarUrl = await this.url.toPromise();

    novoEvento.imagem = salvarUrl;

    await this.appService.add(novoEvento);
    this.router.navigate(["listaEventos"]);
  }
  uploadFile(event) {
    const file = event.target.files[0];

    const nomeArquivo = "arquivo teste";

    const fileRef = this.storage.ref(nomeArquivo);
    const task = this.storage.upload(nomeArquivo, file);

    this.porcentagemEnvio = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(finalize(() => (this.url = fileRef.getDownloadURL())))
      .subscribe();
  }
}
