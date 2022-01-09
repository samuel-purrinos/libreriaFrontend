import { Component, OnInit } from '@angular/core';
import { Numero } from 'src/app/model/numero';
import { NumeroService } from '../../service/numero.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  numeros: Numero[] = [];

  constructor(private numeroService: NumeroService) {
  }

  ngOnInit() {
    this.numeroService.findAll().subscribe(data => {
      this.numeros = data;
    });
  }
}
