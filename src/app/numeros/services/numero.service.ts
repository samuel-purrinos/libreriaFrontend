import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Numero } from '../interfaces/numero.interface';

@Injectable({
  providedIn: 'root'
})
export class NumeroService {

  private numerosUrl: string;

  constructor(private http: HttpClient) {
    this.numerosUrl = 'https://localhost:8080/numeros';
  }

  getNumeroPorId (id :string): Observable<Numero>{
    return this.http.get<Numero>(this.numerosUrl+"/"+id);
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

  getSugerencias( termino: string ): Observable<Numero[]> {
    return this.http.get<Numero[]>(`${ this.numerosUrl }?q=${ termino }`);
  }
}