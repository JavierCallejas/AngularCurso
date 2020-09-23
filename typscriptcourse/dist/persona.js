"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad, peso) {
        this._nombre = nombre;
        this._edad = edad;
        this._peso = peso;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get peso() {
        return this._peso;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    crecer() {
        this._edad++;
    }
    subirDePeso() {
        this._peso++;
    }
    bajarDePeso() {
        this._peso--;
    }
}
exports.Persona = Persona;
