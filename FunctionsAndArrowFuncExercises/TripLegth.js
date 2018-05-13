function tripLength(arr){
    "use strict";
    let [x1, y1, x2, y2, x3, y3] = arr.map(Number);

    let distanceOne = distance(x1, y1, x2, y2);
    let distanceTwo = distance(x2, y2, x3, y3);
    let distanceThree = distance(x1, y1, x3, y3);


    if (distanceOne + distanceTwo <= distanceTwo + distanceThree) {
        console.log('1->2->3: ' + Number(distanceOne + distanceTwo));
    }
    else if (distanceOne + distanceThree < distanceTwo + distanceThree) {
        console.log("2->1->3: " + Number(distanceOne + distanceThree));
    }
    else {
        console.log("1->3->2: " + Number(distanceTwo + distanceThree));
    }

    function distance(x1, y1, x2, y2){
        let distanceX = Math.pow(x1 - x2, 2);
        let distanceY = Math.pow(y1 - y2, 2);

        let distance = Math.sqrt(distanceX + distanceY);
        return distance
    }

}
tripLength(['0', '0', '2', '0', '4', '0']);