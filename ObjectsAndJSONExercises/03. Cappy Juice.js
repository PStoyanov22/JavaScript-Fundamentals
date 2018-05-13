function cappy(arr){
    let juices = {};
    let juiceBottles = {};

    for (let str of arr) {
        let [name, quantity] = str.split(' => ');
        quantity = Number(quantity);
        if(!juices.hasOwnProperty(name)){
            juices[name] = quantity;
        }else{
            juices[name] += quantity;
        }
        quantity = juices[name];
        if(quantity >= 1000){
            let bottles = Math.floor(quantity / 1000);

            juiceBottles[name] = bottles;


        }
    }
    for (let name in juiceBottles) {
        console.log(`${name} => ${juiceBottles[name]}`)
    }

}


cappy(['Kiwi => 234',
       'Pear => 2345',
       'Watermelon => 3456',
       'Kiwi => 4567',
       'Pear => 5678',
       'Watermelon => 6789'])