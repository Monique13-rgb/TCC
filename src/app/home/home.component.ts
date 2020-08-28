import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Usuario } from '../models/usuario.model';
import { UsuariosService } from '../services/usuarios.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  
  usuario: Usuario;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public router: Router,
    private location: Location,
    private usuariosService: UsuariosService,
    public authFire: AngularFireAuth
    ) {}

  async ngOnInit(): Promise<void> {

    this.usuario = await this.usuariosService.getUsuarioLogado();

}
  voltar(){
    this.location.back();
  }

  SignOut(){
    this.authFire.auth.signOut();
    this.router.navigate(['login']);

}
}
