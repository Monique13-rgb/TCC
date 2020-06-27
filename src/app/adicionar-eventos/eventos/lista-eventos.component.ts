import { Component, OnInit } from "@angular/core";
import { Evento } from "../../models/evento.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from 'src/app/services/app.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: "app-lista-eventos",
  templateUrl: "./lista-eventos.component.html",
  styleUrls: ["./lista-eventos.component.scss"],
})
export class ListaEventosComponent implements OnInit {
  eventos: Observable<Evento[]>;

  constructor(public appService: AppService, public router: Router, public auth: AngularFireAuth,private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.eventos = this.appService.getObservable();
  }

  async deletar(evento: Evento) {
    await this.appService.delete(evento.id);
    if (evento.imagem){
      const refImagem = this.storage.storage.refFromURL(evento.imagem);
      await refImagem.delete();
       }
  }

  async editar(evento: Evento) {
    this.router.navigate(["editEvent",evento.id]); 
  }

programacao(evento: Evento) {
this.router.navigate(["listaProgramacao",evento.id]); 
}

palestrantes(evento: Evento){
  this.router.navigate(["palestrantes",evento.id]); 

}

}
