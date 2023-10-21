 export class Character {
    constructor(name, type, health = 100, level = 1, attack, defence) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть от 2 до 10 символов');
        }
        this.name = name;
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('Такого персонажа нет');
        }        
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if(this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего');
        }
        this.level += 1;
        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round(this.defence * 1.2);
        this.health = 100;
    }

    damage(points) {
        if (this.health >= 0){
            this.health -= points * (1 - this.defence / 100);
            if (this.health < 0) {
                this.health = 0;
            }
        }
    }
}

export class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman', 100, 1, 25, 25);
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman', 100, 1, 40, 10);
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name, 'Magician', 100, 1, 10, 40);
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', 100, 1, 25, 25);
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead', 100, 1, 40, 10);
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie', 100, 1, 10, 40);
    }
}