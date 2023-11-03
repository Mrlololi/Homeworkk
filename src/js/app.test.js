import { obj, orderByProps, character, attackWindow, moves } from './app.js';

describe('orderByProps function', () => {
  it('should return an array with sorted properties by the given order and the rest in alphabetical order', () => {
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    expect(orderByProps(obj, ['name', 'level'])).toEqual(expected);
  });

  it('should sort unspecified properties in alphabetical order', () => {
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
    ];
    expect(orderByProps(obj, ['name'])).toEqual(expected);
  });

  it('should return an empty array if the object is empty', () => {
    expect(orderByProps({}, ['name', 'level'])).toEqual([]);
  });
});

describe('attackWindow function', () => {
  it('should add a default description to moves without one', () => {
    attackWindow(character);
    expect(character.special[1].description).toBe('Описание недоступно');
  });

  it('should not overwrite existing descriptions', () => {
    attackWindow(character);
    expect(character.special[0].description).toBe('Двойной выстрел наносит двойной урон');
  });

  it('should populate the moves array with special moves from the character', () => {
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно'
      }
    ];
    attackWindow(character);
    expect(moves).toEqual(expected);
  });

  it('should return the updated moves array', () => {
    const result = attackWindow(character);
    expect(result).toEqual(moves);
  });
});