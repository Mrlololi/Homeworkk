export let heroHealthColor;

export function showHealthColor(hero) {
    if(hero.health > 50){
        heroHealthColor = 'green';
        return 'healthy';
    } else if(hero.health <= 50 && hero.health >= 15){
        heroHealthColor = 'yellow';
        return 'wounded';
    } else if(hero.health < 15){
        heroHealthColor = 'red';
        return 'critical';
    }
}

export function sortByHealth(heroList){
    return heroList.sort((a, b) => a.health - b.health);
}