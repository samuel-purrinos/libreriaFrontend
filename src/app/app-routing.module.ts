import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicFormComponent } from './comic-form/comic-form/comic-form.component';
import { ComicListComponent } from './busqueda/comic-list/comic-list.component';
import { BusquedaPageComponent } from './busqueda/busqueda-page/busqueda-page.component';

const routes: Routes = [
  {path : 'numeros',component : BusquedaPageComponent},
  {path : 'addnumero', component : ComicFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
