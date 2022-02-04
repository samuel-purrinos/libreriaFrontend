import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';



@NgModule({
    exports :[
      TableModule,
      ButtonModule,
      MenubarModule
    ]
})
export class PrimeNgModule { }
