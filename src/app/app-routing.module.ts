import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicFormComponent } from './comic-form/comic-form/comic-form.component';
import { ComicListComponent } from './comic-list/comic-list/comic-list.component';

const routes: Routes = [
  {path : 'numeros',component : ComicListComponent},
  {path : 'addnumero', component : ComicFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
