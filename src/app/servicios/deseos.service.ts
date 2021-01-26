import { Lista } from './../models/lista.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    const lista1 = new Lista('Recolectar piedras');
    const lista2 = new Lista('comprar zapatillas');

    this.listas.push(lista1, lista2);

  }
}
