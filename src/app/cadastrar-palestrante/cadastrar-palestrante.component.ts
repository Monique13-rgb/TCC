import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Palestrante } from '../models/palestrante.model';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Location } from '@angular/common';
import { AppService } from '../services/app.service';
import { PalestranteService } from '../services/palestrante.service';

@Component({
  selector: 'app-cadastrar-palestrante',
  templateUrl: './cadastrar-palestrante.component.html',
  styleUrls: ['./cadastrar-palestrante.component.scss']
})
export class CadastrarPalestranteComponent implements OnInit {
  forms: Observable<Palestrante[]>;
  idEvento: string;
  porcentagemEnvio: Observable<number>;
  url: Observable<string>;
  imagem: File;
  palestrante : Palestrante;
  
  formPalestrante = new FormGroup({
    nome: new FormControl(null),
    sobrenome: new FormControl(null),
    imagem: new FormControl(null,[Validators.required]),
   
  });

  constructor(
     public appService: AppService, 
     public router: Router, 
     private storage: AngularFireStorage,
     public palestranteService: PalestranteService,
     public activatedRoute: ActivatedRoute,
     private location: Location
     ) { }
  ngOnInit(): void {
    this.idEvento = this.activatedRoute.snapshot.paramMap.get('id');
  }
  async cadastrar() {
    const novoPalestrante = this.formPalestrante.value as Palestrante;
    novoPalestrante.idEvento = this.idEvento;

   if (this.imagem){
      novoPalestrante.imagem = await this.enviarImagem();
     }
     
    await this.palestranteService.add(novoPalestrante);
    this.router.navigate(["/home/palestrantes",this.idEvento]);

  }
  uploadFile(event) {
    this.imagem = event.target.files[0];
  }
  enviarImagem(): Promise<string> {

    return new Promise<string>((resolve) => {

        const nomeArquivo = Math.floor(Math.random() * 100000).toString();
        const fileRef = this.storage.ref(nomeArquivo);
        const task = this.storage.upload(nomeArquivo, this.imagem);

        this.porcentagemEnvio = task.percentageChanges();

        task.snapshotChanges()
            .pipe(finalize(() => {
                fileRef.getDownloadURL().subscribe(url => resolve(url));
            }))
            .subscribe();
   });
 
}
}
