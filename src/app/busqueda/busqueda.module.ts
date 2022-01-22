import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BusquedaPageComponent } from './busqueda-page/busqueda-page.component';
import { ComicListComponent } from './comic-list/comic-list.component';



@NgModule({
  declarations: [
    SidebarComponent,
    BuscarComponent,
    BusquedaPageComponent,
    ComicListComponent
  ],
  exports:[
    BusquedaPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BusquedaModule { }
