import { Coleccion } from "./coleccion";
export class Numero {
    id : number;
    volumen : number;
    fecha_publicacion : Date;
    fecha_compra : Date;
    autor : string;
    precio : number;
    portada : Uint8Array;
    coleccion : Coleccion;
    estado : Estado;
    
    constructor(id : number,volumen : number,fecha_publicacion : Date,fecha_compra : Date, autor : string, precio : number,
        portada : Uint8Array, coleccion : Coleccion, estado : Estado){
            this.id=id;
            this.volumen=volumen;
            this.fecha_publicacion=fecha_publicacion;
            this.fecha_compra=fecha_compra;
            this.autor=autor;
            this.precio=precio;
            this.portada=portada;
            this.coleccion=coleccion;
            this.estado=estado;
        }
}
enum Estado {
    malo, roto, bueno, excelente
}