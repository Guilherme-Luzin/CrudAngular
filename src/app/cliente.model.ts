import { Type } from "@angular/core";

export interface ICliente{
  slug: string //slug: this.nomeCompleto.toLowerCase().replace(/ /g, '-'),
  nomeCompleto: string;
  idade: number;
  email: string;
  sexo: string;
  }