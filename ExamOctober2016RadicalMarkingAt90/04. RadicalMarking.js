function solution(arr){
    let peopleWithSubscribers = new Map();
    let subscribersOf = new Map();
    for (let dataRow of arr) {
        dataRow = dataRow.split('-');

        if(dataRow.length === 1){
            let person = dataRow[0];
            if(!peopleWithSubscribers.has(person)){
                peopleWithSubscribers.set(person, new Set());
            }
        }else{
            let subscriber = dataRow[0];
            let person = dataRow[1];
            if(!peopleWithSubscribers.has(person) || !peopleWithSubscribers.has(subscriber)){
                continue;
            }else{
                if(peopleWithSubscribers.has(person)){
                    if(person === subscriber){
                        continue
                    }
                    peopleWithSubscribers.get(person).add(subscriber);
                    if(!subscribersOf.has(subscriber)){
                        subscribersOf.set(subscriber, new Set());
                    }
                    subscribersOf.get(subscriber).add(person);

                }
            }
        }


    }



    let sortedPersons = [...peopleWithSubscribers.entries()].sort((a, b) => {
        let result =  b[1].size - a[1].size;
        if(result !== 0){
            return result;
        }else
            return subscribersOf.get(b[0]) - subscribersOf.get(a[0])

    });



    let mostSubscribers = sortedPersons[0][0];
    console.log(mostSubscribers);
    let winner = sortedPersons[0][1];
    let count = 1;
    if(winner !== undefined){
        for (let subscribers of winner) {
            console.log(`${count}. ${subscribers}`);
            count++;
        }
    }


}
solution(['A',
          'B',
          'C',
          'D',
          'F',
          'A-D',
          'D-A',
          'C-A',
          'F-A',
          'B-D',
          'D-F',
          'C-D']);