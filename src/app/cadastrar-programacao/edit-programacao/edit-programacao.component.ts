import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Programacao } from 'src/app/models/programacao.model';
import { ProgramacaoService } from 'src/app/services/programacao.service';

@Component({
  selector: 'app-edit-programacao',
  templateUrl: './edit-programacao.component.html',
  styleUrls: ['./edit-programacao.component.scss']
})
export class EditProgramacaoComponent implements OnInit {
  idEvento: string;
  prog: Programacao;
  idProgramacao: string;
  date = new FormControl(new Date());


  formularioProg = new FormGroup({
    nomePalestrante: new FormControl(null, [Validators.required]),
    tipo: new FormControl(null, [Validators.required]),
    local: new FormControl(null, [Validators.required]),
    vagas: new FormControl(null, [Validators.required]),
    valor: new FormControl(null, [Validators.required]),
    dataInicio: new FormControl(new Date().getDate()),
    dataFinal: new FormControl (new Date().getDate()),
    horaInicio: new FormControl(),
    horaFinal: new FormControl(),
  });

  constructor(public programacaoService: ProgramacaoService,
    public router: Router, public activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.idEvento = this.activatedRoute.snapshot.paramMap.get('id');
    this.prog = await this.programacaoService.get(this.idEvento);
    this.formularioProg.patchValue(this.prog);
  }

  async editar() {
    const progeditado = this.formularioProg.value as Programacao;
    progeditado.id = this.prog.id;
    const programacao = await this.programacaoService.update(progeditado);
    this.router.navigate(["/home/listaProgramacao", this.prog.idEvento]);

  }
}

