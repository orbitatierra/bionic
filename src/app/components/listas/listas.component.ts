import { Router } from '@angular/router';
import { DeseosService } from './../../servicios/deseos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada: true;
  constructor( public deseosService: DeseosService,
               private router: Router) { }

  ngOnInit() {}



  listaSeleccionada( lista: Lista) {

    if ( this.terminada) {
 
      alert(this.terminada);
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id}`);
    } else {

      alert(this.terminada);

      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id}`);
    }
    }
    

}
