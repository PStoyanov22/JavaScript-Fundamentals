function checker(arr){
    let [x1, x2, y1, y2] = arr.map(Number);

    let xSquarred = Math.pow(x1 - y1, 2);
    let ySquarred = Math.pow(x2 - y2, 2);

    console.log(`{${x1}, ${x2}} to {${0}, ${0}} is ${distanceXCoordinate(x1, x2)}`);
    console.log(`{${y1}, ${y2}} to {${0}, ${0}} is ${distanceYCoordinate(x1, x2)}`);
    console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is ${distancePoints(xSquarred, ySquarred)}`);

    function distancePoints(a, b){
        let d = Math.sqrt(xSquarred + ySquarred);
        return d == Math.round(d) ? "valid" : "invalid";
    }
    function distanceXCoordinate(a, b){
        let d1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(x2, 2));
        return d1 == Math.round(d1) ? "valid" : "invalid";
    }
    function distanceYCoordinate(a, b){
        let d2 = Math.sqrt(Math.pow(y1, 2) + Math.pow(y2, 2));
        return d2 == Math.round(d2) ? "valid" : "invalid";
    }
}
checker(['b', '0', 'a', '4']);