import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[]=[
    {label : 'Buscar',routerLink :"numeros"},
    {label : 'Añadir número',routerLink : "addnumero"},
    {label : 'Mostrar todos'}
  ]

}
