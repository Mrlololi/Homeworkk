export const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

export function orderByProps(object, firstSort) {
  const orderedProps = [];
  const remainingProps = [];

  for (const key in object) {
    if (firstSort.includes(key)) {
      orderedProps.push({ key: key, value: object[key] });
    } else {
      remainingProps.push({ key: key, value: object[key] });
    }
  }

  const remainingPropsSorted = remainingProps.sort((a, b) => a.key.localeCompare(b.key));
  const newObj = orderedProps.concat(remainingPropsSorted);

  return newObj;
}

export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ]
};

export function attackWindow(player) {
  const processedMoves = player.special.map((specialMove) => ({
    ...specialMove,
    description: specialMove.description || "Описание недоступно",
  }));

  return processedMoves;
}

const sortedProps = orderByProps(obj, ["name", "level"]);
console.log(sortedProps);

const moves = attackWindow(character);
console.log(moves);