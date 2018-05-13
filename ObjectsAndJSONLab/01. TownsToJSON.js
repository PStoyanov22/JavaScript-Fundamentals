function parseTown(arr){
    let towns = [];

    for (let town of arr.slice(1)) {
        let [townName, lat, long] = town.split(/\s*\|\s*/).filter(e => e != '');
        let townObj = {Town: townName,
            Latitude: Number(lat),
            Longitude: Number(long)};
        towns.push(townObj);
    }


    console.log(JSON.stringify(towns));


}
parseTown(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);