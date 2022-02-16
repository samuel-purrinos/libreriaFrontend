import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Numero } from '../model/numero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumeroService {

  private numerosUrl: string;

  constructor(private http: HttpClient) {
    this.numerosUrl = 'http://localhost:8080/numeros';
  }

  buscar (query :string): Observable<Numero[]>{
    return this.http.get<Numero[]>(this.numerosUrl+"/"+query);
  }
  public findAll() : Observable<Numero[]>{
    return this.http.get<Numero[]>(this.numerosUrl);
  }

  eliminar(id: number){
    this.http.delete(this.numerosUrl+"/"+id).subscribe();
  }
  public save(numero: Numero) {
    return this.http.post<Numero>(this.numerosUrl, numero);
  }
}