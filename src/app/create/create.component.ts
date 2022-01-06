import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ICliente } from '../cliente.model'
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  durationInSeconds = 1;

  cliente: ICliente = {slug: '', nomeCompleto: '', idade: 0, email: '', sexo: ''}
  formCliente = this._clienteService.formCliente.controls;
  
  constructor(public _clienteService: ClientesService, private _location: Location) { 
    }
    
  ngOnInit(): void {
  }

  onSubmit(): void{
    // if(this._clienteService.formCliente.get('slug') == null){
    //   this._clienteService.addCliente(this._clienteService.formCliente.value)
    //   .then(() => this._clienteService.formCliente.reset())
    // }
    // else{
    //   this._clienteService.updateCliente(this._clienteService.formCliente.value)
    //     .then(() => this._clienteService.formCliente.reset())
    // }

    this._clienteService.addCliente(this._clienteService.formCliente.value)
      .then(() => this._clienteService.formCliente.reset())
      alert("Dados salvos com sucesso")
      this.goBack();
  }

  goBack(): void{
    this._location.back() 
    this._clienteService.formCliente.reset();
  }

}
