import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClientesService } from '../clientes.service';

import { ICliente } from '../cliente.model'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  clientes: ICliente = {slug: '', nomeCompleto: '', idade: 0, email: '', sexo: ''}

  constructor(private _route: ActivatedRoute,
    public _clienteService: ClientesService,
    private _location: Location) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(): void{
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._clienteService.getClientes();
  }
  deleteCliente(cliente: ICliente){
    if(confirm("Tem certeza que deseja deletar esse cliente?") == true){
      this._clienteService.deleteCliente(cliente).then(() => console.log(cliente));
    }
  }

  goBack(): void {
    this._location.back();
  }
}
