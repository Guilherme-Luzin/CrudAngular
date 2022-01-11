import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ICliente } from '../cliente.model'
import { ClientesService } from '../clientes.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  durationInSeconds = 1;

  cliente: ICliente = {slug: '', nomeCompleto: '', idade: 0, email: '', sexo: ''}
  formCliente = this._clienteService.formCliente.controls;
  
  constructor(public _clienteService: ClientesService, 
    private _location: Location, 
    private _snackBar: MatSnackBar) { 
    }
    
  ngOnInit(): void {
  }

  onSubmit(): void{
    if(this._clienteService.formCliente.get('slug')?.value == null){
      this._clienteService.addCliente(this._clienteService.formCliente.value)
      .then(() => this.openSnackBar("salvo"))
    }
    else{
      this._clienteService.updateCliente(this._clienteService.formCliente.value)
        .then(() => this.openSnackBar("Editado"))
    }
    this.goBack()
  }

  goBack(): void{
    this._location.back();
    this._clienteService.formCliente.reset();
  }

  openSnackBar(mensagem: string) {
    this._snackBar.open(`Registro ${mensagem} com sucesso`, "Ok", {
      duration: 3000
    }).afterDismissed()
  }

}
