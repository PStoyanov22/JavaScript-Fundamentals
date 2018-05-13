function lowestPrice(arr){
    let towns = new Map();
    for (let row of arr) {
        let [town, product, price] = row.split(' | ');
        price = Number(price);
        if(!towns.has(product)){
            towns.set(product, new Map());
        }
        if(!towns.get(product).has(town)){
            towns.get(product).set(town, price);
        }else{
            towns.get(product).set(town, price)
        }
    }
    for (let [product, place] of towns) {
        let minProductPrice = Number.MAX_VALUE;
        let townMinPrice = "";
        for (let [town, price] of place) {
            if (price < minProductPrice){
                minProductPrice = price;
                townMinPrice = town;

            }
        }
        console.log(`${product} -> ${minProductPrice} (${townMinPrice})`)
    }
}
lowestPrice(['Sample Town | Sample Product | 1000',
             'Sample Town | Orange | 2',
             'Sample Town | Peach | 1',
             'Sofia | Orange | 3',
             'Sofia | Peach | 2',
             'Sofia | Orange | 5',
             'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);