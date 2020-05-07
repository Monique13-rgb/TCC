import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RootNavComponent } from './root-nav/root-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AdicionarEventosComponent } from './adicionar-eventos/adicionar-eventos.component';
import { ListaEventosComponent } from './adicionar-eventos/eventos/lista-eventos.component';
import { PalestrantesComponent } from './cadastrar-palestrante/palestrantes/palestrantes.component';
import { CadastrarProgramacaoComponent } from './cadastrar-programacao/cadastrar-programacao.component';
import { ListaProgramacaoComponent } from './cadastrar-programacao/programacao/lista-programacao.component';
import { CadastrarPalestranteComponent } from './cadastrar-palestrante/cadastrar-palestrante.component';
import { EditEventComponent } from './adicionar-eventos/edit-event/edit-event.component';
import { EditProgramacaoComponent } from './cadastrar-programacao/edit-programacao/edit-programacao.component';


import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    RootNavComponent,
    PalestrantesComponent,
    CadastrarProgramacaoComponent,
    ListaProgramacaoComponent,
    CadastrarPalestranteComponent,
    EditEventComponent,
    EditProgramacaoComponent,
    AdicionarEventosComponent,
  
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
    MatListModule,
    MatCardModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireStorageModule,



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
