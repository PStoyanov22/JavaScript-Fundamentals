function build(arr){
    let wall = arr.map(Number);
    let concrete = 0;

    let result = [];
    let lowest = Math.min(...wall);

    for (let i = lowest; i <= 30; i++) {
        let concreteDaily = 0;
        for (let section = 0; section < wall.length; section++) {
            if(wall[section] === 30){
                continue;
            }
            concreteDaily += 195;
            wall[section] += 1;
        } 
          if(concreteDaily != 0){
              result.push(concreteDaily);
          }

    }
    console.log(result.join(', '));
    let cost = 1900 * (result.reduce((a, b) => a + b));
    console.log(`${cost} pesos`);

}
build([17]);