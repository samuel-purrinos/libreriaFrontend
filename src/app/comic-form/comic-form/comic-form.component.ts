import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Numero } from 'src/app/model/numero';
import { NumeroService } from 'src/app/service/numero.service';

@Component({
  selector: 'app-comic-form',
  templateUrl: './comic-form.component.html',
  styleUrls: ['./comic-form.component.css']
})
export class ComicFormComponent implements OnInit {
  numero!: Numero;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private numeroService: NumeroService) {
  
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.numeroService.save(this.numero).subscribe(result => this.gotoComicList());
  }

  gotoComicList() {
    this.router.navigate(['/numeros']);
  }
}
