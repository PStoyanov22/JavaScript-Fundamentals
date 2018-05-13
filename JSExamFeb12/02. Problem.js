function solution(arr1, arr2){
    let matrix = arr1
        .map(row => row.split(' ')
            .map(Number)
        );
    let commands = arr2;
    let result = [];


    for (let i = 0; i < commands.length; i++) {
        let actions = commands[i];
        actions = actions.split(' ');
        if(actions.length > 1){
            if(actions[0] === "breeze"){
                let rowIndex = Number(actions[1]);
                let drop = 15;
                for (let row = rowIndex; row < rowIndex + 1; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        matrix[row][col] -= drop;
                    }

                }



            }else if(actions[0] === "gale"){
                let columnIndex = Number(actions[1]);
                let drop = 20;
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = columnIndex; col < columnIndex + 1; col++) {
                        matrix[row][col] -= drop;
                    }
                }
            }else if(actions[0] === "smog"){
                let increase = Number(actions[1]);
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        matrix[row][col] += increase;

                    }

                }
            }
        }



    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] < 0 || matrix[row][col] >= 50){
                let position = `[${row}-${col}]`;
                result.push(position);
            }

        }

    }
    if(result.length > 0){
        console.log("Polluted areas: " + result.join(', '));
    }else{
        console.log("No polluted areas")
    }


}
solution([
    "5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24",
],
    ["breeze 1", "gale 2", "smog 35"]);