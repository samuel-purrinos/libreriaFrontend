import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Numero } from '../model/numero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumeroService {

  private numerosUrl: string;
  private addNumero: string;

  constructor(private http: HttpClient) {
    this.numerosUrl = 'http://localhost:8080/findAll';
    this.addNumero = 'http://localhost:8080/insertarnumero';
  }

  public findAll(): Observable<Numero[]> {
    return this.http.get<Numero[]>(this.numerosUrl);
  }

  public save(numero: Numero) {
    return this.http.post<Numero>(this.addNumero, numero);
  }
}
