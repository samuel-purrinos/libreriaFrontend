export interface Numero {
    imagen?: any;
    id:                number;
    volumen:           number;
    fecha_publicacion: Date;
    fecha_compra:      Date;
    autor:             string;
    precio:            number;
    portada:           any;
    coleccion:         Coleccion;
    estado:            Estado;
}

export interface Coleccion {
    id:        number;
    nombre:    string;
    editorial: string;
}
export enum Estado {
    malo, roto, bueno, excelente
}