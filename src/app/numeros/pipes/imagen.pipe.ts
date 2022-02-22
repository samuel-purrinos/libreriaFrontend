import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Numero } from '../interfaces/numero.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  constructor(private sanitizer : DomSanitizer){}
  transform( numero: Numero ): any {
    let objectURL = 'data:image/jpeg;base64,' + numero.portada;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}
