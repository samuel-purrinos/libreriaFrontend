import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NumeroService } from '../../service/numero.service';
import { Numero } from '../../model/numero';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent {
  @Input() _resultados: Numero[] = [];
  @Output() onEliminar : EventEmitter<number>=new EventEmitter();
  constructor(private numeroService: NumeroService,private sanitizer : DomSanitizer,private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  get resultados(){
    for(let i=0;i<this._resultados.length;i++){
      let objectURL = 'data:image/jpeg;base64,' + this._resultados[i].portada;
      this._resultados[i].imagen=this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
    return this._resultados;
  }
  eliminar(id:number){
    this.onEliminar.emit(id);
 }
}
