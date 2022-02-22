import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Numero } from '../../interfaces/numero.interface';
import { NumeroService } from '../../services/numero.service';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styles: [
  ]
})
export class NumeroComponent implements OnInit {

  numero!: Numero;

  constructor( private activatedRoute: ActivatedRoute,
               private numeroService: NumeroService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.numeroService.getNumeroPorId(id) )
      )
      .subscribe( numero => this.numero = numero );

  }

  regresar() {
    this.router.navigate(['/numeros/home/listado']);
  }
}
