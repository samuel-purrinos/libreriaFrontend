import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Numero } from 'src/app/model/numero';
import { NumeroService } from 'src/app/service/numero.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-comic-form',
  templateUrl: './comic-form.component.html',
  styleUrls: ['./comic-form.component.css']
})
export class ComicFormComponent {
  numero!: Numero;
  public formulario : FormGroup;
  estados : string[] =['malo','roto','bueno','excelente'];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private numeroService: NumeroService,
    private formBuilder : FormBuilder) {
      this.formulario = formBuilder.group({
        coleccion: ['', [Validators.required, Validators.minLength(10)]],
        editorial: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
        autor: ['', [Validators.required]],
        precio: ['', [Validators.required]],
        volumen: ['', [Validators.required]],
        estado: ['', [Validators.required]],
      });
  
  }

  onSubmit() {
    this.numeroService.save(this.numero).subscribe(result => this.gotoComicList());
  }

  gotoComicList() {
    this.router.navigate(['/numeros']);
  }
  get coleccion(){
    return this.formulario.get('coleccion');
  }

  get editorial(){
    return this.formulario.get('editorial');
  }

  get autor(){
    return this.formulario.get('autor');
  }

  get precio(){
    return this.formulario.get('precio');
  }

  get volumen(){
    return this.formulario.get('volumen');
  }

  get estado(){
    return this.formulario.get('estado');
  }
  

  

}
