export class Personaje{
    nombre:String;
    poder:number;
    imagen:String;
    raza:String
    historia:String;

    constructor(nombre:String, poder:number, imagen:String, raza:String, historia:String) {
        this.nombre = nombre;
        this.poder = poder;
        this.imagen = imagen;
        this.raza = raza;
        this.historia = historia;
    }
}