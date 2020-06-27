import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Palestrante } from '../models/palestrante.model';



@Injectable({
  providedIn: "root",
})
export class PalestranteService {
  constructor(private firestore: AngularFirestore) {}

  getObservable(idEvento: string): Observable<Palestrante[]> {
    const ref = this.firestore
      .collection<Palestrante>("palestrantes", (ref) => ref.where('idEvento','==',idEvento));
    return ref.valueChanges({ idField: "id" });
  }

  async add(palestrante: Palestrante): Promise<Palestrante> {
    const docRef = await this.firestore
      .collection<Palestrante>("palestrantes")
      .add(palestrante);
    const doc = await docRef.get();
    return {
      id: doc.id,
      ...doc.data(),
    } as Palestrante;
  }


  async delete(palestranteId): Promise<void> {
    await this.firestore.collection('palestrantes').doc(palestranteId).delete();
  }

  async update(palestrante: Palestrante): Promise<void> {
    await this.firestore.collection('palestrantes').doc(palestrante.id).update(palestrante);

  }
  async get(idPalestrante: string): Promise<Palestrante> {
    const doc = await this.firestore.collection('palestrantes').doc(idPalestrante).get().toPromise();
    return {
      id: doc.id,
      ...doc.data(),
    } as Palestrante;
}
}