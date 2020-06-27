import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Palestrante } from '../../models/palestrante.model';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/models/evento.model';
import { Location } from '@angular/common';
import { PalestranteService } from 'src/app/services/palestrante.service';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.scss']
})
export class PalestrantesComponent implements OnInit {
palestrantes: Observable<Palestrante[]>;
  idEvento: string;
  evento: Evento;

  constructor(public palestranteService: PalestranteService, public router: Router
    ,public activatedRoute: ActivatedRoute,
    private location: Location) { }

   async ngOnInit() {
    this.idEvento = this.activatedRoute.snapshot.paramMap.get('id');
    this.palestrantes = this.palestranteService.getObservable(this.idEvento);
  }


  async delete(palestranteId) {
    await this.palestranteService.delete(palestranteId);
  }

  async editar(palestrante: Palestrante) {
    this.router.navigate(["edit",palestrante.id]); 

}
irParaCadastroPalestrante(){
    
  this.router.navigate(["cadastrarPalestrante",this.idEvento]);
} 
}

