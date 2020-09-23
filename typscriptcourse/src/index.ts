import { Persona} from "./persona";

class Main {
    constructor(){}
    public static run(){
        var persona = new Persona ('Javier', 25, 100);
        console.log(persona.nombre, persona.edad);
        persona.crecer();
        persona.crecer();
        console.log(persona.nombre, persona.edad);
    }
}
Main.run();