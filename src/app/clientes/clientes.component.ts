import { Component, OnInit, Type } from '@angular/core';

import { ICliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ICliente[] = [];
  searchText: string = "";

  constructor(public _clienteService: ClientesService) { }

  ngOnInit(): void {
    this._clienteService.getClientes().subscribe((res: ICliente[]) => {
      this.clientes = res;
    })
  }

  showDeletedMessage = false;

  deleteCliente(cliente: ICliente){
    if(confirm("Tem certeza que deseja deletar esse cliente?") == true){
      this._clienteService.deleteCliente(cliente)/*.then(() => alert("cliente deletado com sucesso"));*/
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 1000);
    }
  }

  filterCondition(cliente: ICliente){
    return cliente.nomeCompleto.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
  }

}
