function cityMarket(arr){
    let market = new Map();
    for (let row of arr) {
        let [city, product, profit] = row.split(' -> ');
        if(!market.has(city)){
            market.set(city, new Map());

        }
        if(!market.get(city).has(product)){
            profit = profit.split(' : ').reduce((a, b) => a * b);
            market.get(city).set(product, profit);
        }else{
            let oldProfit = market.get(city).get(product);
            profit = profit.split(' : ').reduce((a, b) => a * b);
            market.get(city).set(product, oldProfit + profit)
        }
    }

    for (let [town, products] of market) {
        console.log(`Town - ${town}`);
        for (let [product, profit] of products) {
            console.log(`$$$${product} : ${profit}`);
        }

    }
}
cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
            'Sofia -> Raspberry -> 200000 : 1500',
            'Sofia -> Audi Q7 -> 200 : 100000',
            'Montana -> Portokals -> 200000 : 1',
            'Montana -> Qgodas -> 20000 : 0.2',
            'Montana -> Chereshas -> 1000 : 0.3',
             'Montana -> Qgodas -> 200 : 1']);