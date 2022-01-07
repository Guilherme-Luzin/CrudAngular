import { Component, OnInit } from '@angular/core';

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

  cliente: ICliente[] = []

  constructor(private _route: ActivatedRoute, 
    public _clienteService: ClientesService,
    private _location: Location) { }

  ngOnInit(): void {
    const slug = String(this._route.snapshot.paramMap.get('slug'));
    console.log("Esse é o slug -> " + slug)
    this._clienteService.getClienteByID(slug).subscribe((data: ICliente[]) => {
      this.cliente = data;
      console.log(data)
      console.log(this.cliente)
    })
  }

  goBack(): void {
    this._location.back();
  }

}
