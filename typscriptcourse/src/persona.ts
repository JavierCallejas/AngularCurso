export class Persona {
    private _nombre:string;
    private _edad:number;
    private _peso: number;

    constructor(nombre:string, edad:number, peso:number){
        this._nombre = nombre;
        this._edad = edad;
        this._peso = peso;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad
    }
    get peso(){
        return this._peso;        
    }
    set nombre(nombre:string){
        this._nombre = nombre;
    }
    public crecer() {
        this._edad++;
    }
    public subirDePeso(){
        this._peso++;
    }
    public bajarDePeso(){
        this._peso--;
    }
}