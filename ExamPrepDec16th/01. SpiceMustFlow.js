function flow(arr){
    let startingYield = Number(arr[0]);
    let day = 0;
    let totalSpice = 0;

    while(startingYield >= 100){

        totalSpice += startingYield - 26;
        day++;
        startingYield -= 10;

    }
    if(totalSpice >= 26){
        totalSpice -= 26;
    }

    console.log(day);
    console.log(totalSpice);

}
flow(['450']);
