import { Character} from "./character.js";

export class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman', 100, 1);
        this.attack = 25;
        this.defence = 25;
    }
}