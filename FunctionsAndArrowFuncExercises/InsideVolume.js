function point(arr){
    "use strict";
    for (let i = 0; i < arr.length; i += 3) {
        let x = Number(arr[i]);
        let y = Number(arr[i + 1]);
        let z = Number(arr[i + 2]);

        if(inVolume(x, y, z)){
            console.log("inside")
        }else{
            console.log("outside")
        }
    }
    function inVolume(x, y, z){
        let x1 = 10;
        let y1 = 20;
        let z1 = 15;
        let x2 = 50;
        let y2 = 80;
        let z2 = 50;

        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                if(z >= z1 && z <= z2){
                    return true;
                }
            }
        }
        return false;
    }
}
point([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);