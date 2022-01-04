import { Component, Input, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Location } from '@angular/common';

import { Clientes } from '../clientes/clientes.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() cliente?: Clientes;

  formCliente = this._clienteService.formCliente.controls;
  
  constructor(private _route: ActivatedRoute,
    public _clienteService: ClientesService,
    private _location: Location) { 
    }
    
  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(): void{
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._clienteService.getCliente(id).subscribe(cliente => this.cliente = cliente);
  }

  onSubmit(): void{    
       this.goBack();
  }

  goBack(): void{
    this._location.back();
  }

}
