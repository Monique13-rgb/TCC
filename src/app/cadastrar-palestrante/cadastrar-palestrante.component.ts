import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-palestrante',
  templateUrl: './cadastrar-palestrante.component.html',
  styleUrls: ['./cadastrar-palestrante.component.scss']
})
export class CadastrarPalestranteComponent implements OnInit {
  formularioPalestrante = new FormGroup({
    nome: new FormControl(null, [Validators.required]),
    sobrenome: new FormControl(null, [Validators.required]),
    informacoes: new FormControl(null, [Validators.required]),
   
  });
  jsonDados: string;

  constructor(public appService: AppService, public router: Router) { }
  ngOnInit(): void {
  }

}
