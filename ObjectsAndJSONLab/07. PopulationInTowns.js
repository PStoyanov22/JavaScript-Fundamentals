function parseTown(arr){
    let towns = new Map();
    for (let str of arr) {
        let [town, population] = str.split(' <-> ');
        if(!towns.has(town)){
            towns.set(town, Number(population))
        }else{
            towns.set(town, towns.get(town) + Number(population));
        }
    }
    for (let [town, pop] of towns) {
        console.log(`${town} : ${pop}`)
    }

}
parseTown(['Sofia <-> 1200000',
           'Montana <-> 20000',
           'New York <-> 10000000',
           'Wangton <-> 2345000',
           'Las Vegas <-> 1000000']);
