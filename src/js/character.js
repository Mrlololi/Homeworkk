export class Character {
constructor(name, type, health = 100, level = 1) {
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