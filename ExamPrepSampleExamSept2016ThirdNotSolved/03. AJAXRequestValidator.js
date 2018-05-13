function solution(arr){

    let hash = arr[arr.length - 1];
    let hashPattern = /([0-9][a-zA-Z])+$/g;
    let isValid = true;

    for (let row = 0; row < arr.length - 1; row += 3) {
        let method = arr[row];
        let credentials = arr[row + 1];
        let content = arr[row + 2];



        if (/^Method:\s(GET|PUT|POST|DELETE)$/.test(method) &&
            /^Credentials:\s(Basic|Bearer)\s([A-Za-z0-9]+)$/.test(credentials) &&
            /^Content:\s([0-9a-zA-Z.]+)$/.test(content)){
            let methodRow = method.split(': ');
            methodRow = methodRow[1];
            let credentialsRow = credentials.split(' ');
            let token = credentialsRow[1];
            let authToken = credentialsRow[2];

            if(methodRow !== "GET" && token === "Basic"){
                console.log(`Response-Method:${method}&Code:401`);
                continue;
            }
            if(!isValidAuthToken(authToken, hash)){
                console.log(`Response-Method:${method}&Code:403`);
                continue;
            }
            console.log(`Response–Method:${method}&Code:200&Header:${authToken}`);

        }else{
            console.log("Response-Code:400");
        }

    }
    function isValidAuthToken(token, hash) {
        token = token.split('');
        for (let i = 0; i < hash.length; i += 2) {
            let count = Number(hash[i]);
            let ch = hash[i + 1];
            if (count === token.filter(c => c === ch).length) {
                return true;
            }
        }

        return false;
    }
}
solution(['Method: PUT',
          'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
          'Content: users.asd/1782452$278///**asd123',
          'Method: POST',
          'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
          'Content: Johnathan',
          'Method: DELETE',
          'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
          'Content: This.is.a.sample.content',
          '2e5g']);