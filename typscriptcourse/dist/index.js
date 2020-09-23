"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
class Main {
    constructor() { }
    static run() {
        var persona = new persona_1.Persona('Javier', 25, 100);
        console.log(persona.nombre, persona.edad);
        persona.crecer();
        persona.crecer();
        console.log(persona.nombre, persona.edad);
    }
}
Main.run();
