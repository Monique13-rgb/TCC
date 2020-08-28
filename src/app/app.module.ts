import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';

import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localept, 'pt');

import { AdicionarEventosComponent } from './adicionar-eventos/adicionar-eventos.component';
import { ListaEventosComponent } from './adicionar-eventos/eventos/lista-eventos.component';
import { PalestrantesComponent } from './cadastrar-palestrante/palestrantes/palestrantes.component';
import { CadastrarProgramacaoComponent } from './cadastrar-programacao/cadastrar-programacao.component';
import { ListaProgramacaoComponent } from './cadastrar-programacao/programacao/lista-programacao.component';
import { CadastrarPalestranteComponent } from './cadastrar-palestrante/cadastrar-palestrante.component';
import { EditEventComponent } from './adicionar-eventos/edit-event/edit-event.component';
import { EditProgramacaoComponent } from './cadastrar-programacao/edit-programacao/edit-programacao.component';
import { EditPalestranteComponent } from './cadastrar-palestrante/edit-palestrante/edit-palestrante.component'

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';

import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { UsuariosService } from './services/usuarios.service';
import { AuthGuard } from './guards/auth.guard';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    PalestrantesComponent,
    CadastrarProgramacaoComponent,
    ListaProgramacaoComponent,
    CadastrarPalestranteComponent,
    EditEventComponent,
    AdicionarEventosComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    HomeComponent,
    EditProgramacaoComponent,
    EditPalestranteComponent,
    ListaUsuarioComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    MatProgressSpinnerModule,
    MatStepperModule





  ],
  providers: [
    UsuariosService,
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
