import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Evento[]> {
    const ref = this.firestore
      .collection<Evento>("eventos", (ref) => ref.orderBy("nomeEvento"));
      console.log(ref.valueChanges);
    return ref.valueChanges({ idField: "id" });
  }

  async add(evento: Evento): Promise<Evento> {
    const docRef = await this.firestore
      .collection<Evento>("eventos")
      .add(evento);
    const doc = await docRef.get();
    return {
      id: doc.id,
      ...doc.data(),
    } as Evento;
  }

  async delete(eventoId): Promise<void> {
    await this.firestore.collection('eventos').doc(eventoId).delete();
  }

  async update(evento: Evento): Promise<void> {
    await this.firestore.collection('eventos').doc(evento.id).update(evento);

  }
  async get(idEvento: string): Promise<Evento> {
    const doc = await this.firestore.collection('eventos').doc(idEvento).get().toPromise();
    return {
      id: doc.id,
      ...doc.data(),
    } as Evento;
  }
}
