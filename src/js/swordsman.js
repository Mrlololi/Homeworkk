import { Character} from "./character.js";

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman', 100, 1);
        this.attack = 40;
        this.defence = 10;
    }
}