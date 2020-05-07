import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Programacao } from '../../models/programacao.model';

@Component({
  selector: 'app-lista-programacao',
  templateUrl: './lista-programacao.component.html',
  styleUrls: ['./lista-programacao.component.scss']
})
export class ListaProgramacaoComponent implements OnInit {
programacaos: Programacao;

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
  }
  editarProgramacao(){
    this.router.navigateByUrl('editProgramacao/:id')
  }
  excluirProgramacao(){

  }
  voltar(){
    this.router.navigateByUrl('listaEventos')
  }
}
