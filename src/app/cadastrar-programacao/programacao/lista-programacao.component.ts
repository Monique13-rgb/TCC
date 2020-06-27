import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Programacao } from '../../models/programacao.model';
import { Observable } from 'rxjs';

import { Evento } from 'src/app/models/evento.model';
import { Location } from '@angular/common';
import { ProgramacaoService } from 'src/app/services/programacao.service';

import {formatDate } from '@angular/common';

@Component({
  selector: 'app-lista-programacao',
  templateUrl: './lista-programacao.component.html',
  styleUrls: ['./lista-programacao.component.scss']
})
export class ListaProgramacaoComponent implements OnInit {
  prog: Observable<Programacao[]>;
  idEvento: string;
  evento: Evento;
  testedata: Date;

  constructor(public programacaoService: ProgramacaoService, public router: Router
    ,public activatedRoute: ActivatedRoute,
    private location: Location) { 
    }
    
   async ngOnInit() {
    this.idEvento = this.activatedRoute.snapshot.paramMap.get('id');
    this.prog = this.programacaoService.getObservable(this.idEvento);
  }


  async delete(programacaoId) {
    await this.programacaoService.delete(programacaoId);
  }

  async editar(programacao: Programacao) {
    this.router.navigate(["editProgramacao",programacao.id]); 
  }




  voltar(){
    this.location.back();
  }
  irParaCadastroProg(){
    
    this.router.navigate(["cadastrarProgramacao",this.idEvento]);
  } 
}
