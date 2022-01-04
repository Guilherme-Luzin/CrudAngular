import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClientesService } from '../clientes.service';

import { Clientes } from '../clientes/clientes.component'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() cliente?: Clientes;

  constructor(private _route: ActivatedRoute,
    public _clienteService: ClientesService,
    private _location: Location) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(): void{
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._clienteService.getCliente(id).subscribe(cliente => this.cliente = cliente);
  }

  goBack(): void {
    this._location.back();
  }

}
