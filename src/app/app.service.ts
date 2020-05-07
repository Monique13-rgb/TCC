import { Injectable } from "@angular/core";
import { Evento } from "./models/evento.model";
import { Palestrante } from "./models/palestrante.model";
import { Programacao } from "./models/programacao.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private firestore: AngularFirestore) {}

  getObservable(): Observable<Evento[]> {
    const ref = this.firestore
      .collection<Evento>("eventos", (ref) => ref.orderBy("nomeEvento"));
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
    await this.firestore.collection("eventos").doc(eventoId).delete();
  }

  async update(evento: Evento): Promise<void> {
    await this.firestore.collection("eventos").doc(evento.id).update(evento);
  }
}
