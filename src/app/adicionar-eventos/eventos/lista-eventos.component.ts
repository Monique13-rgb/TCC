import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento.model';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent implements OnInit {
  
  eventos: Observable<Evento[]>;

   constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
this.eventos = this.appService.getObservable();
}

async deletar(evento: Evento) {
  await this.appService.delete(evento);
}

async editar(evento: Evento) {
  await this.appService.update(evento);
}

}