function solution(arr){

    let planesLeft = new Set();
    let townPassengers = new Map();
    let townPlanes = new Map();
    let doesExist = true;
    let arrivals = 0;
    let departures = 0;
    for (let dataRow of arr) {
        let [planeId, town, passengers, action] = dataRow.split(' ');
        passengers = Number(passengers);

        if (action === 'land') {
            if(planesLeft.has(planeId)){
                continue;
            }else{
                planesLeft.add(planeId);
            }
            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }
            if(!townPassengers.has(town)){

                townPassengers.set(town, [0, 0]);

            }
            townPlanes.get(town).add(planeId);
            townPassengers.get(town)[0] += passengers;
        }
        if(action === 'depart'){
            if(!planesLeft.has(planeId)){
                continue;
            }else{
                planesLeft.delete(planeId);
            }

            if(!townPassengers.has(town)){
                townPassengers.set(town, [0, 0]);
            }

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }

            townPassengers.get(town)[1] += passengers;
            townPlanes.get(town).add(planeId);

        }

    }
    console.log("Planes left:");
    let sortedPlanesLeft = [...planesLeft.values()].sort((a, b) => a.localeCompare(b));
    for (let planes of sortedPlanesLeft) {
        console.log(`- ${planes}`);
    }
    let sortedTownWithPass = [...townPassengers.entries()].sort(sortTowns);

    for (let [town, passenger] of sortedTownWithPass) {
        console.log(town);

        console.log(`Arrivals: ${passenger[0]}`);
        console.log(`Departures: ${passenger[1]}`);
        let sortedTownPlanes = [...townPlanes.get(town).values()].sort((a, b) => a.localeCompare(b));
        console.log('Planes:');
        for(let planeId of sortedTownPlanes) {
            console.log(`-- ${planeId}`);
        }
    }

    function sortTowns(a, b){
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];

        if(aArrivals !== bArrivals){
            return bArrivals - aArrivals;
        }else{
            return a[0].localeCompare(b[0]);
        }

    }

}
solution(["Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"]);