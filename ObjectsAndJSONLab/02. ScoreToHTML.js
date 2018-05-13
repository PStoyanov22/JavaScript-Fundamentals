function scoreToHTML(json){
    let html = '<table>\n';
    html += '    <tr><th>name</th><th>score</th></tr>\n';
    let obj = JSON.parse(json);
    for (let obj1 of obj) {
        let name = obj1.name;
        let score = obj1.score;
        html += `    <tr><td>${htmlEscape(name)}</td><td>${score}</td></tr>\n`
    }
    html += '</table>';

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    console.log(html);
}
scoreToHTML('[{"name":"Pesho & Gosho","score":479},{"name":"Gosho","score":205}]');