import { Component, OnInit, Type } from '@angular/core';

import { ICliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { DialogComponent } from '../dialog/dialog.component';

import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ICliente[] = [];
  searchText: string = "";
  displayedColumns: string[] = ['nomeCompleto', 'idade', 'email', 'sexo'];
  dataSource = new MatTableDataSource(this.clientes);

  constructor(public _clienteService: ClientesService, 
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  openSnackBar(Mensagem: string) {
    this._snackBar.open(Mensagem, "Ok", {
      duration: 3000
    });
  }

  ngOnInit(): void {
    this._clienteService.getClientes().subscribe((res: ICliente[]) => {
      this.clientes = res;
    })
  }
  
  deleteCliente(cliente: ICliente){
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this._clienteService.deleteCliente(cliente)
        .then(() => this.openSnackBar("Registro Deletado com sucesso"))
        .catch((error) => {
          this.openSnackBar("Erro ao deletar registro " + error)
        });
      }
    });
  }

  filterCondition(cliente: ICliente){
    return cliente.nomeCompleto.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
  }

}
