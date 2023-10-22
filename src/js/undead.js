import { Character} from "./character.js";

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead', 100, 1);
        this.attack = 40;
        this.defence = 10;
    }
}