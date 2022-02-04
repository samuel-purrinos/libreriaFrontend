import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicFormComponent } from './comic-form/comic-form/comic-form.component';
import { NumeroService } from './service/numero.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BusquedaModule } from './busqueda/busqueda.module';
import { SharedModule } from './shared/shared.module';
import localeES  from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent,
    ComicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PrimeNgModule,
    ReactiveFormsModule,
    BusquedaModule,
    SharedModule
  ],
  exports :[
    PrimeNgModule
  ],
  providers: [NumeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
