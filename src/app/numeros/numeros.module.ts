import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosRoutingModule } from './numeros-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { NumeroComponent } from './pages/numero/numero.component';
import { NumeroTarjetaComponent } from './components/numero-tarjeta/numero-tarjeta.component';
import { MaterialModule } from '../material/material.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ListadoComponent,
    HomeComponent,
    NumeroComponent,
    NumeroTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NumerosRoutingModule,
    MaterialModule
  ]
})
export class NumerosModule { }
