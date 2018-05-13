function bill(arr){
    let sum = 0;
    let result = [];

    let products = arr.filter((str, i) => i % 2 == 0);
    let price = arr.filter((str, i) => i % 2 != 0).map(Number).forEach(p => sum += p);

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);
}
bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])