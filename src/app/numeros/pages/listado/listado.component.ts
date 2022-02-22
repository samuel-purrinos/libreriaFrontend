import { Component, OnInit } from '@angular/core';
import { NumeroService } from '../../services/numero.service';
import { Numero } from '../../interfaces/numero.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  numeros : Numero[]=[];
  constructor(private numeroService : NumeroService) { }

  ngOnInit(): void {
    this.numeroService.findAll().subscribe(
      data => this.numeros=data
    )
  }

}
