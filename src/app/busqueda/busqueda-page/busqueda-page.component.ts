import { Component, OnInit } from '@angular/core';
import { NumeroService } from 'src/app/service/numero.service';


@Component({
  selector: 'app-busqueda-page',
  templateUrl: './busqueda-page.component.html',
  styleUrls: ['./busqueda-page.component.css']
})
export class BusquedaPageComponent {
 
  constructor(private numeroService: NumeroService) {

  }


  buscar(termino : string){
    if ( termino.trim().length === 0 ) {
      return;
    };
    this.numeroService.buscar(termino);
  }

  eliminar(id:number){
    this.numeroService.eliminar(id);
  }
}
