function storeCatalogue(arr){
    let products = new Map();

    for (let row of arr) {
        let [product, price] = row.split(' : ');
        let initials = product[0];
        if(!products.has(initials)){
            products.set(initials, new Map());
            products.get(initials).set(product, price);
        }
        let productPrice = products.get(initials);
        productPrice.set(product, price);
    }
    let sortedProducts = [...products.entries()].sort(sortProducts);

    for (let [key, value] of sortedProducts) {
        console.log(key);
        let sortedValue = [...value.entries()].sort(sortProducts)
        for (let [pr, price] of sortedValue) {
            console.log(`  ${pr}: ${price}`)
        }
    }

    function sortProducts(a, b){
        return a[0].localeCompare(b[0])

    }
}
storeCatalogue(['Appricot : 20.4',
                'Fridge : 1500',
                'TV : 1499',
                'Deodorant : 10',
                'Boiler : 300',
                'Apple : 1.25',
                'Anti-Bug Spray : 15',
                'T-Shirt : 10']);