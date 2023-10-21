import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from "./app.js";

test("should throw error for short name", () => {
    expect(() => {
        new Character("A", "Bowman", 100, 1, 25, 25);
    }).toThrow("Имя должно быть от 2 до 10 символов");
});

test("should throw error for unknown type", () => {
    expect(() => {
        new Character("Archer", "Unknown", 100, 1, 25, 25);
    }).toThrow("Такого персонажа нет");
});

test("should level up correctly", () => {
    const char = new Character("Archer", "Bowman", 100, 1, 25, 25);
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBe(30);
    expect(char.defence).toBe(30);
    expect(char.health).toBe(100);
});

test("should throw error when leveling up a dead character", () => {
    const char = new Character("Archer", "Bowman", 0, 1, 25, 25);
    expect(() => {
        char.levelUp();
    }).toThrow("Нельзя повысить левел умершего");
});

test("should apply damage correctly", () => {
    const char = new Character("Archer", "Bowman", 100, 1, 25, 25);
    char.damage(50);
    expect(char.health).toBeLessThan(100);
}); 

test("should not allow health to go below 0", () => {
    const char = new Character("Archer", "Bowman", 20, 1, 25, 25);
    char.damage(50);
    expect(char.health).toBe(0);
});

test("should level up a character with partial health", () => {
    const char = new Character("Archer", "Bowman", 50, 1, 25, 25);
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBe(30);
    expect(char.defence).toBe(30);
    expect(char.health).toBe(100);
});