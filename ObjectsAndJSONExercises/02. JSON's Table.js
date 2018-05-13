function jsonToHTML(arr) {


    let html = '<table>\n';

    for (let input of arr) {
        input = JSON.parse(input);
        html += '    <tr>\n';
        for (let key of Object.keys(input)) {
            html += `        <td>${htmlEscape(input[key])}</td>\n`;
        }
        html += '    <tr>\n';
    }
    return html + "</table>";

    function htmlEscape(key) {
        let replaced = key.toString();
        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');

        return replaced;
    }
}

console.log(jsonToHTML(['{"name":"Pesho","position":"Promenliva","salary":100000}', '{"name":"Teo","position":"Lecturer","salary":1000}', '{"name":"Georgi","position":"Lecturer","salary":1000}']));;