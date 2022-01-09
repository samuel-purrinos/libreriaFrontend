import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Numero } from '../model/numero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NumeroServiceService {
  private numerosUrl: string;
  private addNumeroUrl: string;

  constructor(private http: HttpClient) {
    this.numerosUrl = 'http://localhost:8080/findAll';
    this.addNumeroUrl = 'http://localhost:8080/insertarnumero';
  }

  public findAll(): Observable<Numero[]> {
    return this.http.get<Numero[]>(this.numerosUrl);
  }

  public save(numero: Numero) {
    return this.http.post<Numero>(this.addNumeroUrl, numero);
  }

}
