/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
// const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

// function orderByProps(object, firstSort) {
//     const orderedProps = [];
//     const remainingProps = [];

//     for (let key in object) {
//         if (firstSort.includes(key)) {
//             orderedProps.push({ key: key, value: object[key] });
//         } else {
//             remainingProps.push({ key: key, value: object[key] });
//         }
//     }

//     const remainingPropsSorted = remainingProps.sort((a, b) => a.key.localeCompare(b.key));

//     const newObj = orderedProps.concat(remainingPropsSorted);

//     return newObj;
// }

// const newObj = orderByProps(obj, ["name", "level"]);

const character = {
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
        icon: 'http://...',
      }
    ]	
  }

let moves = []

  function attackWindow(player) {
    player.special.forEach((specialMove, index) => {
        if(!specialMove.description){
            specialMove.description = "Описание недоступно"
    }
    moves.push(specialMove);
    });
  }

attackWindow(character)

console.log(moves)