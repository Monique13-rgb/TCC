import { Injectable } from '@angular/core';
import { Evento } from './models/evento.model';
import { Palestrante } from './models/palestrante.model';
import { Programacao } from './models/programacao.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

   constructor ( private firestore: AngularFirestore) { }

 getObservable(): Observable<Evento[]> {

  return this.firestore.collection<Evento>('eventos',
      ref => ref.orderBy('nomeEvento')
    ).valueChanges();

  }
  async add(evento: Evento): Promise<Evento> {
    const docRef = await this.firestore.collection<Evento>('eventos').add(evento);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as Evento;

  }

  async delete(evento: Evento): Promise<void> {
    await this.firestore.collection('eventos').doc(evento.id).delete();
  }

  async update(evento: Evento): Promise<void> {
    await this.firestore.collection('eventos').doc(evento.id).update(evento);
  }













}
