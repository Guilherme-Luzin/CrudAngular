import { Component, OnInit, Type } from '@angular/core';

export interface Clientes{
  id: number;
  nome: string;
  idade: number;
  email: string;
  sexo: string;
}

export const CLIENTE: Clientes[] = [
  {id: 1, nome: 'Guilherme', idade:20, email:"guilhermeluzin@hotmail.com", sexo:"masculino"},
  {id: 2, nome: 'Eduardo', idade:20, email:"eeduardoluzin@hotmail.com", sexo:"masculino"},
  {id: 3, nome: 'Joao', idade:55, email:"joaoeopedejeiao@yahoo.com.br", sexo:"masculino"},
  {id: 4, nome: 'Maria', idade:25, email:"mariaseeker@gmail.com", sexo:"feminino"},
  {id: 5, nome: 'Lara', idade:21, email:"laraeve@outlook.com", sexo:"feminino"},
  {id: 6, nome: 'Joana', idade:60, email:"joaninha123@gmail.com", sexo:"feminino"}
]

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'idade', 'email', 'sexo'];
  dataSource = CLIENTE;

  constructor() { }

  ngOnInit(): void {
  }

}
