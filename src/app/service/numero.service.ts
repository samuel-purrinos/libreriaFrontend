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
  private buscarUrl: string;
  private eliminarUrl : string;
  private _historial : string[]=[];
  private _resultados : Numero[]=[];

  get historial (): string[]{
    return [...this._historial];
  }

  get resultados(){
    return [...this._resultados]
  }
  constructor(private http: HttpClient) {
    this.numerosUrl = 'http://localhost:8080/findAll';
    this.addNumero = 'http://localhost:8080/insertarnumero';
    this.buscarUrl= 'http://localhost:8080/findbycoleccion';
    this.eliminarUrl='http://localhost:8080/eliminanumero/'
  }

  buscar (query :string){
    if(!this._historial.includes(query.trim())){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);}
    this.http.get<Numero[]>(this.buscarUrl+"/"+query).subscribe(
      data => this._resultados=data
    );
  }
  public findAll() {
    this.http.get<Numero[]>(this.numerosUrl).subscribe(data=>
      this._resultados=data);
  }

  eliminar(id: number){
    console.log(id);
    this.http.get(this.eliminarUrl+id).subscribe(respuesta => console.log(respuesta));
  }
  public save(numero: Numero) {
    return this.http.post<Numero>(this.addNumero, numero);
  }
}
