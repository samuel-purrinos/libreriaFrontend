import { Component, EventEmitter, Output } from '@angular/core';
import { NumeroService } from '../../service/numero.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  @Output() onEnter : EventEmitter<string>=new EventEmitter();
  termino : string;
  
  constructor(private numeroService: NumeroService) {
      this.termino='';
  }

    mostrarTodos(){
      this.numeroService.findAll();
    }
    buscar(){
      this.onEnter.emit(this.termino);
   }

   get resultados(){
     return this.numeroService.resultados;
   }
   

}
