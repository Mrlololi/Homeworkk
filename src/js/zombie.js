import { Character} from "./character.js";

export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie', 100, 1);
        this.attack = 10;
        this.defence = 40;
    }
}