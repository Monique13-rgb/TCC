import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEventosComponent } from './adicionar-eventos/eventos/lista-eventos.component';
import { AdicionarEventosComponent } from './adicionar-eventos/adicionar-eventos.component';
import { EditEventComponent } from './adicionar-eventos/edit-event/edit-event.component';

import { ListaProgramacaoComponent } from './cadastrar-programacao/programacao/lista-programacao.component';
import { CadastrarProgramacaoComponent } from './cadastrar-programacao/cadastrar-programacao.component';
import { EditProgramacaoComponent } from './cadastrar-programacao/edit-programacao/edit-programacao.component';

import { PalestrantesComponent } from './cadastrar-palestrante/palestrantes/palestrantes.component';
import { CadastrarPalestranteComponent } from './cadastrar-palestrante/cadastrar-palestrante.component';
import { EditComponent } from './cadastrar-palestrante/palestrantes/edit/edit.component';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  { path: '', redirectTo: 'listaEventos', pathMatch: 'full' },

  { path:  'adicionarEventos', component: AdicionarEventosComponent},
  { path: 'listaEventos', component: ListaEventosComponent},
  { path:  'editEvent/:id', component: EditEventComponent},

  { path:  'cadastrarProgramacao', component: CadastrarProgramacaoComponent},
  { path:  'listaProgramacao/:id', component: ListaProgramacaoComponent},
  { path:  'editProgramacao/:id', component: EditProgramacaoComponent},

  { path:  'cadastrarPalestrante', component: CadastrarPalestranteComponent},
  { path:  'palestrantes/:id', component: PalestrantesComponent},
  { path:  'edit/:id', component: EditComponent},
 
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
