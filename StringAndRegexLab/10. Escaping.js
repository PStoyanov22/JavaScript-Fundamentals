function escapingHTML(arr){

    let result = '<ul>\n';

     function escape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    for (let str of arr) {
        result += '  <li>' + escape(str) + '</li>\n';
    }
    result += '</ul>';
    console.log(result)

}
escapingHTML(['<b>unescaped text</b>', 'normal text'])