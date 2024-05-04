import { Injectable } from '@angular/core';
import {
  Firestore,
  docData,
  doc,
  query,
  orderBy,
  collection,
  collectionData,
  where,
  addDoc,
  getDocs,
  updateDoc,
} from '@angular/fire/firestore';
import { DocumentData, serverTimestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(private firestore: Firestore) {}

  enviarData(data: any) {
    return addDoc(collection(this.firestore, 'formulario-respuestas'), {
      ...data,
      fecha: serverTimestamp(),
    });
  }

  getDataFormularioforId(id: string) {
    return docData(doc(this.firestore, 'formulario-respuestas', id));
  }

  getFormularios() {
    const collections = collection(this.firestore, `formulario-respuestas`);
    const q = query(collections, orderBy('fecha', 'desc'));
    return collectionData(q, { idField: 'id' });
  }
}
