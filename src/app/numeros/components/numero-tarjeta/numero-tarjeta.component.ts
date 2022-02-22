import { Component, Input, OnInit } from '@angular/core';
import { Numero } from '../../interfaces/numero.interface';

@Component({
  selector: 'app-numero-tarjeta',
  templateUrl: './numero-tarjeta.component.html',
  styles: [
  ]
})
export class NumeroTarjetaComponent {

  @Input() numero! : Numero;

}
