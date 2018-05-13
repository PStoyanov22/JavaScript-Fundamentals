function radar(input){
    let speed = input[0];
    let zone = input[1];

    if(speed > limit(zone)){
        let infraction = speed - limit(zone);

        if (infraction > 0 && infraction <= 20) {
            console.log("speeding");
        }else if(infraction > 20 && infraction <= 40){

            console.log("excessive speeding");

        }else if(infraction > 40){
            console.log("reckless driving");
        }
    }
    function limit(zone)
    {
        switch (zone){
            case "city": return 50;
            case "residential": return 20;
            case "motorway": return 130;
            case "interstate": return 90;
        }
    }
}
radar([200, "motorway"]);