import { Router } from '@angular/router';
import { DeseosService } from './../../servicios/deseos.service';
import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';




@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  constructor( public deseosService: DeseosService,
               private router: Router) { }

  ngOnInit() {}

  listaSeleccionada( lista: Lista) {
    this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id}`)

    }
  

}
