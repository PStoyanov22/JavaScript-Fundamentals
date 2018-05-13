function cars(arr){
    let cars = new Map();
    for (let row of arr) {
        let [brand, model, numbers] = row.split(' | ');
        numbers = Number(numbers);
        if(!cars.has(brand)){
            cars.set(brand, new Map());

        }
        if(!cars.get(brand).has(model)){

            cars.get(brand).set(model, numbers);
        }else{
            let oldQuantity = cars.get(brand).get(model);

            cars.get(brand).set(model, oldQuantity + numbers)
        }
    }
    for (let [brand, modelQuantity] of cars) {
        console.log(brand);
        for (let [model, numbers] of modelQuantity) {
            console.log(`###${model} -> ${numbers}`)
        }
        
    }

}
cars(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
'Audi | Q6 | 200']);