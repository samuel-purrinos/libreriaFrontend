import { Component, Input } from '@angular/core';
import { Numero } from 'src/app/model/numero';
import { NumeroService } from '../../service/numero.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent {
  private _resultados: Numero[] = [];

  constructor(private numeroService: NumeroService,private sanitizer : DomSanitizer) {
  }
  get resultados(){
    this._resultados=this.numeroService.resultados;
    for(let i=0;i<this._resultados.length;i++){
      let objectURL = 'data:image/jpeg;base64,' + this._resultados[i].portada;
      this._resultados[i].imagen=this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
    return this._resultados;
  }
  eliminar(id:number){
    this.numeroService.eliminar(id);
  }
  mostrarTodos(){
    this.numeroService.findAll();
  }
}
