import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {

usuario: Observable<Usuario[]>;


  constructor(public usuarioService: UsuariosService, public router: Router) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getObservable();

}
irParaCadastroUsuario() {

  this.router.navigate(["/home/cadastroNovoUsuario"]);
}

}
