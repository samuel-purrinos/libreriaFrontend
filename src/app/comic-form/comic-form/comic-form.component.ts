import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Numero } from 'src/app/model/numero';
import { NumeroService } from 'src/app/service/numero.service';
import { Estado } from '../../model/Estado';

@Component({
  selector: 'app-comic-form',
  templateUrl: './comic-form.component.html',
  styleUrls: ['./comic-form.component.css']
})
export class ComicFormComponent {
  archivoSeleccionado!: File;
  numero: Numero;
  estados : string[] =['malo','roto','bueno','excelente'];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private numeroService: NumeroService) {
      this.numero={
        id : 0,
        volumen : 0,
        fecha_publicacion : new Date(),
        fecha_compra :new Date(), 
        autor : '', 
        precio : 0,
        portada :[],
        estado : Estado.roto,
        coleccion : {
            id:0,
            nombre:'',
            editorial:''
        } 
      }
  }
    public onFileChanged(event: any) {
        this.archivoSeleccionado = event.target.files[0];
       const  reader : FileReader = new FileReader();
       this.numero.portada =reader.readAsArrayBuffer(this.archivoSeleccionado);

      }
  onSubmit() {
    this.numeroService.save(this.numero).subscribe(result => this.gotoComicList());
    //this.gotoComicList();
  }

  gotoComicList() {
    this.router.navigate(['/numeros']);
  }

}
