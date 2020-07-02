import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ListaEventosComponent } from './adicionar-eventos/eventos/lista-eventos.component';
import { AdicionarEventosComponent } from './adicionar-eventos/adicionar-eventos.component';
import { EditEventComponent } from './adicionar-eventos/edit-event/edit-event.component';

import { ListaProgramacaoComponent } from './cadastrar-programacao/programacao/lista-programacao.component';
import { CadastrarProgramacaoComponent } from './cadastrar-programacao/cadastrar-programacao.component';

import { PalestrantesComponent } from './cadastrar-palestrante/palestrantes/palestrantes.component';
import { CadastrarPalestranteComponent } from './cadastrar-palestrante/cadastrar-palestrante.component';
import { EditPalestranteComponent } from './edit-palestrante/edit-palestrante.component';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { EditProgramacaoComponent } from './cadastrar-programacao/edit-programacao/edit-programacao.component';






const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'home', component: HomeComponent,

    children: [

      { path: '', redirectTo: 'listaEventos', pathMatch: 'full' },

      { path: 'listaEventos', component: ListaEventosComponent },
      { path: 'cadastroNovoUsuario', component: CadastroUsuarioComponent },
      { path: 'adicionarEventos', component: AdicionarEventosComponent },

      { path: 'editEvent/:id', component: EditEventComponent },

      { path: 'cadastrarProgramacao/:id', component: CadastrarProgramacaoComponent },
      { path: 'listaProgramacao/:id', component: ListaProgramacaoComponent },
      { path: 'editProgramacao/:id', component: EditProgramacaoComponent},

      { path: 'cadastrarPalestrante/:id', component: CadastrarPalestranteComponent },
      { path: 'palestrantes/:id', component: PalestrantesComponent },
      { path: 'editPalestrante/:id', component: EditPalestranteComponent },

      { path: '**', component: PaginaNaoEncontradaComponent }
    ],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
