import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { BusquedaPageComponent } from './busqueda-page/busqueda-page.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuscarComponent,
    BusquedaPageComponent,
    ComicListComponent
  ],
  exports:[
    BusquedaPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class BusquedaModule { }
