import { Component, OnInit } from '@angular/core';
import { Numero } from 'src/app/model/numero';
import { NumeroServiceService } from '../../service/numero-service.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  numeros: Numero[] = [];

  constructor(private numeroService: NumeroServiceService) {
  }

  ngOnInit() {
    this.numeroService.findAll().subscribe(data => {
      this.numeros = data;
    });
  }
}
