function crystals(arr){
   let target = Number(arr[0]);

   let currentCrystal = 0;
    let cut = c => c / 4;
    let lap = c => c * 0.8;
    let grind = c => c - 20;
    let etch = c => c - 2;
    let xRay = c => c + 1;
    let transport = c => Math.floor(c);

    for (let i = 1; i < arr.length; i++) {
        let crystal = Number(arr[i]);

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let xRayCount = 0;
        console.log(`Processing chunk ${crystal} microns`);
        while(crystal / 4 >= target){
            cutCount++;
            crystal = cut(crystal);
            crystal = transport(crystal)
        }
        if(cutCount > 0){
            console.log(`Cut x${cutCount}`)
            console.log("Transporting and washing")
        }
        while(crystal * 0.8 >= target){
            lapCount++;
            crystal = lap(crystal);
            crystal = transport(crystal)
        }
        if(lapCount > 0){
            console.log(`Lap x${lapCount}`);
            console.log("Transporting and washing")
        }
        while(crystal - 20 >= target){
            grindCount++;
            crystal = grind(crystal);
            crystal = transport(crystal);
        }
        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            console.log("Transporting and washing");
        }
        while(crystal - 2 >= target || crystal - 2 == target - 1){
            etchCount++;
            crystal = etch(crystal);
            crystal = transport(crystal);
        }
        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            console.log("Transporting and washing");
        }

        if(crystal == target){
            console.log(`Finished crystal ${crystal} microns`)
            continue;
        }else if(crystal == target - 1){
            xRayCount++;
            crystal += 1;
        }
        if (xRayCount > 0) {
            console.log(`X-ray x${xRayCount}`);
        }
        console.log(`Finished crystal ${crystal} microns`)
    }
}
crystals(['1000', '4000', '8100']);