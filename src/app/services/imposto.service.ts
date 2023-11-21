import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImpostoService {

  constructor() { }
public calcularICMS(valorTotalProdutos: number, aliquota:number){

  const valorImposto = valorTotalProdutos*(aliquota/100);

  return valorTotalProdutos + valorImposto;

}

}
