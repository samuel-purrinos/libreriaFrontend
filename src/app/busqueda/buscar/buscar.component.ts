import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { NumeroService } from '../../service/numero.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  valor:string="";
  constructor(private numeroService: NumeroService) {
  }

    mostrarTodos(){
      this.numeroService.findAll();
    }
   buscar(){
     this.valor=this.txtBuscar.nativeElement.value;
     if ( this.valor.trim().length === 0 ) {
      return;
    };
    this.numeroService.buscar(this.valor);
    this.txtBuscar.nativeElement.value="";
   }
  ngOnInit(): void {
  }

}
