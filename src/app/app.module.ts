import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumeroServiceService } from './service/numero-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicListComponent } from './comic-list/comic-list/comic-list.component';
import { ComicFormComponent } from './comic-form/comic-form/comic-form.component';

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
    FormsModule
  ],
  providers: [NumeroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
