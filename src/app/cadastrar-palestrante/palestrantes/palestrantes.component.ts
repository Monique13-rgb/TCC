import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { Palestrante } from '../../models/palestrante.model';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.scss']
})
export class PalestrantesComponent implements OnInit {
palestrantes: Palestrante;
  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
  }
editar(){
  this.router.navigateByUrl('edit/:id')
}
excluir(){

}
voltar(){
  this.router.navigateByUrl('listaEventos')
}
}
