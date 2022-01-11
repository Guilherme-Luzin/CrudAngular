import { Injectable } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, enableIndexedDbPersistence
} from '@angular/fire/firestore';
import { getDatabase, ref, child, get, onValue } from "firebase/database";

import { Observable, of } from 'rxjs';

import { ICliente } from './cliente.model'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private firestore: Firestore) {
  }

  formCliente = new FormGroup({
    slug: new FormControl(null),
    nomeCompleto: new FormControl('', [Validators.required, 
    Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$")]),
    idade: new FormControl('', [Validators.required,
      Validators.pattern("^[0-9]+$")]),
    email: new FormControl('', [Validators.required, Validators.email, 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    sexo: new FormControl('', Validators.required)
  })

  getClientes(): Observable<ICliente[]>{
    const clienteRef = collection(this.firestore, 'clientes')
    return collectionData(clienteRef, { idField: 'slug' }) as Observable<ICliente[]>;
  }

  addCliente(cliente: ICliente){
    const clienteRef = collection(this.firestore, 'clientes');
    cliente.slug = `${cliente.nomeCompleto.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/[\s-]+/g, '-')}-${cliente.email.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/[\s-]+/g, '-')}`;
    return addDoc(clienteRef, cliente);
  }
  
  populateForm(cliente: ICliente){
    this.formCliente.setValue(cliente);
  }

  updateCliente(cliente: ICliente){
    const clienteDocRef = doc(this.firestore, `clientes/${cliente.slug}`);
    cliente.slug = `${cliente.nomeCompleto.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, ' ')
      .replace(/[\s-]+/g, '-')}-${cliente.email.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, ' ')
      .replace(/[\s-]+/g, '-')}`;
    return setDoc(clienteDocRef, cliente);
  }

  deleteCliente(cliente: ICliente){
    const clienteDocRef = doc(this.firestore, `clientes/${cliente.slug}`);
    return deleteDoc(clienteDocRef);
  }

  getClienteByID(slug: string){
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `clientes/${slug}`)).then((snapshot) => {
    //   if(snapshot.exists()){
    //     console.log(snapshot)
    //   }
    //   else{
    //     console.log("não há dados")
    //   }
    // }).catch((error) => {
    //   console.log("Esse é o erro ----> " + error)
    // })
    const clienteRef = doc(this.firestore, `cliente/${slug}`);
    return docData(clienteRef, { idField: 'slug' }) as Observable<ICliente>;
  }

}
