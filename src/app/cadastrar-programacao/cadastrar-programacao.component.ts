import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-programacao',
  templateUrl: './cadastrar-programacao.component.html',
  styleUrls: ['./cadastrar-programacao.component.scss']
})
export class CadastrarProgramacaoComponent implements OnInit {


  formularioProgramacao = new FormGroup ({
  
  nomePalestrante: new FormControl(null, [Validators.required]),
  tipo: new FormControl(null, [Validators.required]),
  local: new FormControl(null, [Validators.required]),
  vagas: new FormControl(null, [,Validators.required]),
  valor: new FormControl(null, [Validators.required]),
  data: new FormControl(null, [Validators.required]),
  hora: new FormControl(null, [Validators.required]),

  });
  jsonDados: string;

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
  }
}
