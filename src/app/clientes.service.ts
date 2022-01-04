import { Injectable } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FirebaseApp } from 'firebase/app';

import { Observable, of } from 'rxjs';

import { Clientes } from './clientes/clientes.component'
import { CLIENTE } from './clientes/clientes.component'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() {}
  formCliente = new FormGroup({
    $id: new FormControl(0),
    nome: new FormControl('', Validators.required),
    idade: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    sexo: new FormControl('', Validators.required)
  })

  getCliente(id: number): Observable<Clientes> {
    const cliente = CLIENTE.find(h => h.id === id)!;
    return of(cliente);
  }

}
