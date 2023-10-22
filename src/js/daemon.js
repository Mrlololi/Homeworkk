import { Character} from "./character.js";

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', 100, 1, 25, 25);
        this.attack = 25;
        this.defence = 25;
    }
}