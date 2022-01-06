import { Injectable } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, enableIndexedDbPersistence
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';

import { ICliente } from './cliente.model'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private firestore: Firestore) {
  }

  formCliente = new FormGroup({
    slug: new FormControl(''),
    nomeCompleto: new FormControl('', Validators.required),
    idade: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    sexo: new FormControl('', Validators.required)
  })

  getClientes(): Observable<ICliente[]>{
    const clienteRef = collection(this.firestore, 'clientes')
    return collectionData(clienteRef, { idField: 'slug' }) as Observable<ICliente[]>;
  }

  addCliente(cliente: ICliente){
    const clienteRef = collection(this.firestore, 'clientes');
    return addDoc(clienteRef, cliente);
  }
  
  populateForm(cliente: ICliente){
    this.formCliente.setValue(cliente);
  }

  updateCliente(cliente: ICliente){
    const clienteDocRef = doc(this.firestore, `clientes/${cliente.slug}`);
    return setDoc(clienteDocRef, cliente);
  }

  deleteCliente(cliente: ICliente){
    const clienteDocRef = doc(this.firestore, `clientes/${cliente.slug}`);
    return deleteDoc(clienteDocRef);
  }

  getClienteByID(slug: string){
    const clienteRef = doc(this.firestore, `cliente/${slug}`);
    return docData(clienteRef, { idField: 'slug' }) as Observable<ICliente>;
  }

}
