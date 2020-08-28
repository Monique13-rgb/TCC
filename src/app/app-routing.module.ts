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
import { EditPalestranteComponent } from './cadastrar-palestrante/edit-palestrante/edit-palestrante.component'


import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { EditProgramacaoComponent } from './cadastrar-programacao/edit-programacao/edit-programacao.component';
import { AuthGuard } from './guards/auth.guard';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';






const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'home', component: HomeComponent, canActivate:[AuthGuard],

    children: [

      { path: '', redirectTo: 'listaEventos', pathMatch: 'full' },

      { path: 'listaEventos', component: ListaEventosComponent, canActivate:[AuthGuard]  },
      { path: 'adicionarEventos', component: AdicionarEventosComponent, canActivate:[AuthGuard] },
      { path: 'editEvent/:id', component: EditEventComponent, canActivate:[AuthGuard] },

      { path: 'cadastrarProgramacao/:id', component: CadastrarProgramacaoComponent,canActivate:[AuthGuard] },
      { path: 'listaProgramacao/:id', component: ListaProgramacaoComponent, canActivate:[AuthGuard] },
      { path: 'editProgramacao/:id', component: EditProgramacaoComponent, canActivate:[AuthGuard]},

      { path: 'cadastrarPalestrante/:id', component: CadastrarPalestranteComponent, canActivate:[AuthGuard] },
      { path: 'palestrantes/:id', component: PalestrantesComponent, canActivate:[AuthGuard] },
      { path: 'editPalestrantes/:id', component: EditPalestranteComponent, canActivate:[AuthGuard] },
     
      { path: 'cadastroNovoUsuario', component: CadastroUsuarioComponent, canActivate:[AuthGuard] },
      { path: 'listaUsuario', component: ListaUsuarioComponent, canActivate:[AuthGuard] },

      { path: '**', component: PaginaNaoEncontradaComponent, canActivate:[AuthGuard] }
    ],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
