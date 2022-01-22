import { Component } from '@angular/core';
import { NumeroService } from '../../service/numero.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

get historial(){
 return this.numeroService.historial;
}
  constructor(private numeroService : NumeroService) {
   }
buscar(query :string){
  this.numeroService.buscar(query.trim());

}

}
