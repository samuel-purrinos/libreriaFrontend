import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NumeroComponent } from './pages/numero/numero.component';

const routes : Routes = [
  {
    path : '', component : HomeComponent,
    children : [
      { path : 'agregar', component : AgregarComponent },
      { path : 'buscar', component : BuscarComponent },
      { path : '', component : ListadoComponent },
      { path : 'editar/:id', component : AgregarComponent },
      { path : ':id', component : NumeroComponent },
      { path : '**', redirectTo : 'home' }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports : [
    RouterModule
  ]
})
export class NumerosRoutingModule { }
