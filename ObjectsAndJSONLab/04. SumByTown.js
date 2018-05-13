function sumByTown(arr){

    let towns = {};
    for (let i = 0; i < arr.length; i+= 2) {
        let town = arr[i]
        let pop = Number(arr[i + 1]);

        if(!towns.hasOwnProperty(town)){
            towns[town] = pop;
        }else{
            towns[town] += pop;
        }
    }
    console.log(JSON.stringify(towns))

}
sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])