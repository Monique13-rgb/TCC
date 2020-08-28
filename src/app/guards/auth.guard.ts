import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private usuariosService: UsuariosService,
    private route: Router,
) { }

async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    const usuario = await this.usuariosService.getUsuarioLogado();

    if (usuario) {
        return true;
    } else {

        this.route.navigate(['login']);

        return false;
    }
}

}
