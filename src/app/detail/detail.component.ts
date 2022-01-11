import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClientesService } from '../clientes.service';

import { ICliente } from '../cliente.model'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  clientes: ICliente = {slug: '', nomeCompleto: '', idade: 0, email: '', sexo: ''}

  constructor(private _route: ActivatedRoute, 
    public _clienteService: ClientesService,
    private _location: Location) { }

  ngOnInit() {
    const slug = String(this._route.snapshot.paramMap.get('slug'));
    console.log("Esse é o slug -> " + slug)
    this._clienteService.getClienteByID(slug).subscribe((res: ICliente) => {
      this.clientes = res;
    })
    console.log(this.clientes)
  }

  goBack(): void {
    this._location.back();
  }

}
