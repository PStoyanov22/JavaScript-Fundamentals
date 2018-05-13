function template(arr){
    let html = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    html += "<quiz>\n";

    function question(str){
        let html = "\t<question>\n";
        html += `\t\t${str}\n`;
        html += "\t</question>\n";

        return html;
    }

    function answer(str){
        let html = "\t<answer>\n";
        html += `\t\t${str}\n`;
        html += "\t</answer>\n";

        return html;
    }

    for (let i = 0; i < arr.length; i++) {
        if(i % 2 == 0){
            html += question(arr[i]);
        }else{
            html += answer(arr[i]);
        }

    }
    html += "</quiz>"

    return html;
}

console.log(template(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]));