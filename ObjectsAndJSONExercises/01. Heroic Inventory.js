function inventory(arr){
   let result = [];
    for (let sentence of arr) {
        let hero = sentence.split(' / ');
        let name = hero[0];
        let age = Number(hero[1]);
        let heroItems = [];
        if(hero.length > 2){
            heroItems = hero[2].split(', ');
        }
        let heroObj = {name: name, level: age, items: heroItems};
        result.push(heroObj);
    }
    console.log(JSON.stringify(result))


}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

