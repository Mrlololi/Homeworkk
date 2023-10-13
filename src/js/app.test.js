import { showHealthColor, heroHealthColor, sortByHealth } from './app.js';


test('showHealthColor should return healthy for health > 50', () => {
    const result = showHealthColor({ health: 90 });
    expect(result).toBe('healthy');
});
  
test('showHealthColor should return wounded for 15 <= health <= 50', () => {
    const result = showHealthColor({ health: 20 });
    expect(result).toBe('wounded');
});
  
test('showHealthColor should return critical for health < 15', () => {
    const result = showHealthColor({ health: 10 });
    expect(result).toBe('critical');
});

test('sortByHealth should return sorted array', () => {
    const result = sortByHealth([{ name: 'мечник', health: 10 }, { name: 'маг', health: 100 }, { name: 'лучник', health: 80 }]);
    expect(result).toEqual([{ name: 'мечник', health: 10 }, { name: 'лучник', health: 80 }, { name: 'маг', health: 100 }]);
})  

console.log(heroHealthColor);