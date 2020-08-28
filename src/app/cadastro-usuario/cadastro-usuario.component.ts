import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';

class NovoUsuario {
    sobrenome: string;
    nome: string;
    email: string;
    senha: string;
}

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './cadastro-usuario.component.html',
    styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
    hide = true;
    usuarioJaCadastrado: boolean;
    usuario: Usuario;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        sobrenome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', Validators.required],
        confirmacaoSenha: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private location: Location,
        private router: Router,
        private authFire: AngularFireAuth,
        private usuariosService: UsuariosService,
    ) { }

    ngOnInit(): void {

    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        const novoUsuario = this.formulario.value as NovoUsuario;

        try {

            const userCredential = await this.authFire.auth.createUserWithEmailAndPassword(novoUsuario.email, novoUsuario.senha);
            const uid = userCredential.user.uid;
            console.log(uid);

            let usuario = {
                sobrenome: novoUsuario.sobrenome,
                email: novoUsuario.email,
                nome: novoUsuario.nome
            } as Usuario;

            usuario = await this.usuariosService.add(uid, usuario);
            console.log(this.usuario);
            this.router.navigate(['home/listaUsuario']);

        } catch (error) {

            console.log(error);
            this.usuarioJaCadastrado = true;

        }


    }

    voltar() {
        this.location.back();
    }

      acessar() {
        console.log(this.formulario.getRawValue());
      }
}
