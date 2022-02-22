import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Numero } from '../../interfaces/numero.interface';
import { NumeroService } from '../../services/numero.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino : string ='';
  numeros : Numero[]=[];
  numeroSeleccionado : Numero | undefined;

  constructor(private numeroService : NumeroService,
              private router : Router ) { }

  ngOnInit(): void {
  }
  buscando() {

    this.numeroService.getSugerencias( this.termino.trim() )
      .subscribe( numeros => this.numeros = numeros );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.numeroSeleccionado = undefined;
      return;
    }

    const numero: Numero = event.option.value;
    this.termino = numero.coleccion.nombre;
    let id  : string= numero.id.toString();

    this.router.navigate(['/numeros/home/',id]);

    this.numeroService.getNumeroPorId( id )
      .subscribe( numero => this.numeroSeleccionado = numero );
  }
}
function ValueOf(id: number): any {
  throw new Error('Function not implemented.');
}

