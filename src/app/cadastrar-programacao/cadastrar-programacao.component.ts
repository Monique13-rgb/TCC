import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Programacao } from '../models/programacao.model';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ProgramacaoService } from '../services/programacao.service';


@Component({
  selector: 'app-cadastrar-programacao',
  templateUrl: './cadastrar-programacao.component.html',
  styleUrls: ['./cadastrar-programacao.component.scss']
})
export class CadastrarProgramacaoComponent implements OnInit {
  prog: Observable<Programacao[]>;
  idEvento: string;
  date = new FormControl(new Date());

    
  formularioProg = new FormGroup ({
    nomePalestrante: new FormControl (null,[Validators.required]),
    tipo: new FormControl (null,[Validators.required]),
    local: new FormControl (null,[Validators.required]),
    vagas: new FormControl (null,[Validators.required]),
    valor:new FormControl (null,[Validators.required]),
    dataInicio: new FormControl(new Date().getDate()),
    dataFinal: new FormControl((new Date()).getDate()),
    horaInicio: new FormControl(),
    horaFinal: new FormControl(),
  })
  constructor(public programacaoService: ProgramacaoService, 
   public router: Router, public activatedRoute: ActivatedRoute,
   private location: Location
  ) { }

  async ngOnInit() {
    this.idEvento = this.activatedRoute.snapshot.paramMap.get('id');  


  }
  
  async cadastrar() {
    const novaProgramacao = this.formularioProg.value as Programacao;
    novaProgramacao.idEvento = this.idEvento;

    await this.programacaoService.add(novaProgramacao);
    this.router.navigate(["/home/listaProgramacao",this.idEvento]);

  }
  voltar(){
  this.location.back();
}
}
