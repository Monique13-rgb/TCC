import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Programacao } from '../models/programacao.model';


@Injectable({
  providedIn: "root",
})
export class ProgramacaoService {
  constructor(private firestore: AngularFirestore) { }

  getObservable(idEvento: string): Observable<Programacao[]> {
    const ref = this.firestore.collection<Programacao>("programação", (ref) => ref.where('idEvento', '==', idEvento));
    return ref.valueChanges({ idField: "id" });
  }

  async add(programacao: Programacao): Promise<Programacao> {
    const docRef = await this.firestore
      .collection<Programacao>("programação")
      .add(programacao);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data(),
    } as Programacao;
  }

  async delete(programacaoId): Promise<void> {
    await this.firestore.collection('programação').doc(programacaoId).delete();
  }

  async update(programacao: Programacao): Promise<void> {
    await this.firestore.collection('programação').doc(programacao.id).update(programacao);

  }
  async get(idProgramacao: string): Promise<Programacao> {
    console.log(idProgramacao);
    const doc = await this.firestore.collection('programação').doc(idProgramacao).get().toPromise();

    return {
      id: doc.id,
      ...doc.data(),
    } as Programacao;
  }
}