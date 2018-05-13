function solution(arr, arr1){
let resultedKingdoms = new Map();
    for (let i = 0; i < arr.length; i++) {
        let kingdoms = arr[i];
        let kingdom = kingdoms.kingdom;
        let general = kingdoms.general;
        let army = Number(kingdoms.army);
        if(!resultedKingdoms.has(kingdom)){
            resultedKingdoms.set(kingdom, new Map());

        }
        if(!resultedKingdoms.get(kingdom).has(general)){
            resultedKingdoms.get(kingdom).set(general, army)
        }else{
            let oldValueArmy = resultedKingdoms.get(kingdom).get(general);
            resultedKingdoms.get(kingdom).set(general,  oldValueArmy +  army);
        }
    }
    let kingdomResult = new Map();
    let battlesResult = new Map();
    let battlesCount = arr1;

    for (let i = 0; i < battlesCount.length; i++) {
        let battle = battlesCount[i];
        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];



        if(resultedKingdoms.get(attackingKingdom).has(attackingGeneral) &&
            resultedKingdoms.get(attackingKingdom).has(defendingGeneral)){
            continue;
        }
        let attackingArmyValue = resultedKingdoms.get(attackingKingdom).get(attackingGeneral);
        let defendingArmyValue =  resultedKingdoms.get(defendingKingdom).get(defendingGeneral);
        if(!battlesResult.has(attackingGeneral)){
            battlesResult.set(attackingGeneral, [0, 0]);
        }
        if(!battlesResult.has(defendingGeneral)){
            battlesResult.set(defendingGeneral, [0, 0]);
        }
        if(!kingdomResult.has(attackingKingdom)){
            kingdomResult.set(attackingKingdom, [0, 0]);
        }
        if(!kingdomResult.has(defendingKingdom)){
            kingdomResult.set(defendingKingdom, [0, 0]);
        }
        if(attackingArmyValue > defendingArmyValue){
            attackingArmyValue = Math.floor(attackingArmyValue * 1.1);
            defendingArmyValue = Math.floor(defendingArmyValue * 0.9);
            resultedKingdoms.get(attackingKingdom).set(attackingGeneral, attackingArmyValue);
            resultedKingdoms.get(defendingKingdom).set(defendingGeneral, defendingArmyValue);
            battlesResult.get(attackingGeneral)[0] +=1;
            battlesResult.get(defendingGeneral)[1] += 1;
            kingdomResult.get(attackingKingdom)[0] += 1;
            kingdomResult.get(defendingKingdom)[1] += 1;



        }else if(attackingArmyValue < defendingArmyValue){
            attackingArmyValue = Math.floor(attackingArmyValue * 0.9);
            defendingArmyValue = Math.floor(defendingArmyValue * 1.1);
            resultedKingdoms.get(attackingKingdom).set(attackingGeneral, attackingArmyValue);
            resultedKingdoms.get(defendingKingdom).set(defendingGeneral, defendingArmyValue);
            battlesResult.get(attackingGeneral)[1] +=1;
            battlesResult.get(defendingGeneral)[0] += 1;
            kingdomResult.get(attackingKingdom)[1] +=1;
            kingdomResult.get(defendingKingdom)[0] += 1;
        }else{
            continue;
        }


    }


    let sortedKingdoms = [...kingdomResult.entries()].sort(sortKingdoms);

    for (let [kingdom, results] of sortedKingdoms) {
        console.log(`Winner: ${kingdom}`);
        let winners = [...resultedKingdoms.entries()].sort(sortKingdoms).filter(a => a[0] === kingdom);
        let genRes = resultedKingdoms.get(kingdom);
        genRes = [...genRes.entries()].sort(sortGens());
        for (let [gen, arm] of genRes) {
            console.log(`/\\general: ${gen}`);
            console.log(`---army: ${arm}`);
            let loseWins = [...battlesResult.entries()].filter(a => a[0] === gen);
            let genResul = battlesResult.get(gen);


            console.log(`---wins: ${genResul[0]}`);
            console.log(`---losses: ${genResul[1]}`)
        }
        break;

    }
    function sortGens(a, b){
        let first = a;
        let second = b;


        if(first !== second){
            return second - first;
        }
    }

    function sortKingdoms(a, b){
        let first = a[1][0];
        let second = b[1][0];

        let aLose = a[1][1];
        let bLose = b[1][1];

        if(first !== second){
            return second - first;
        }else if(aLose !== bLose){

            return aLose - bLose;
        }else{
            return a[0].localeCompare(b[0]);
        }

    }

}
solution([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);