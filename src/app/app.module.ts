import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicListComponent } from './comic-list/comic-list/comic-list.component';
import { ComicFormComponent } from './comic-form/comic-form/comic-form.component';
import { NumeroService } from './service/numero.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    ComicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NumeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
