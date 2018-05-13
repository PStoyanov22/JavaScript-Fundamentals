function solution(arr){
    let apps = new Map();
    let backupMap = new Map();
    for (let dataRow of arr) {

        let regex = /^\$([a-z]+)=('([^']+)'&app=)?'([^']+)'$/;

        let match = dataRow.match(regex);
        let module = "";
        let appName = "";
        let type = "";
        let typeName = "";
        if(match !== null){
            if (match[3] === undefined) {
                module = match[1];
                appName = match[4];
                if (!apps.has(appName)) {
                    apps.set(appName, [[], [], []]);
                    if (backupMap.has(appName)) {
                        apps.get(appName)[0] = apps.get(appName)[0].concat(backupMap.get(appName)[0]);
                        apps.get(appName)[1] = apps.get(appName)[1].concat(backupMap.get(appName)[1]);
                        apps.get(appName)[2] = apps.get(appName)[2].concat(backupMap.get(appName)[2]);
                        backupMap.delete(appName);
                    }
                }

            } else {
                [type, typeName, appName] = [match[1], match[3], match[4]];
                if (!apps.has(appName)) {
                    if (!backupMap.has(appName)) {

                        backupMap.set(appName, [[], [], []]);

                        if (type === "controller") {
                            backupMap.get(appName)[0].push(typeName);
                        } else if (type === "model") {
                            backupMap.get(appName)[1].push(typeName);
                        } else if (type === "view") {
                            backupMap.get(appName)[2].push(typeName);
                        }
                    } else {

                        if (type === "controller") {
                            backupMap.get(appName)[0].push(typeName);
                        } else if (type === "model") {
                            backupMap.get(appName)[1].push(typeName);
                        } else if (type === "view") {
                            backupMap.get(appName)[2].push(typeName);
                        }
                    }

                }else{

                    if (type === "controller") {
                        apps.get(appName)[0].push(typeName);
                    } else if (type === "model") {
                        apps.get(appName)[1].push(typeName);
                    } else if (type === "view") {
                        apps.get(appName)[2].push(typeName);
                    }
                }
            }

        }

    }
    let result = {};

    let sortedApps = [...apps.entries()].sort(sorting);


    for (let [appName, data] of sortedApps) {

            result[appName] = {controllers: [], models: [], views: []};
            result[appName].controllers = apps.get(appName)[0].sort((a, b) => a.localeCompare(b));
            result[appName].models = apps.get(appName)[1].sort((a, b) => a.localeCompare(b));
            result[appName].views = apps.get(appName)[2].sort((a, b) => a.localeCompare(b));

    }
    console.log(JSON.stringify(result));



    function sorting(a, b){
        let aControllersCount = a[1][0].length;
        let bControllersCount = b[1][0].length;
        if(aControllersCount !== bControllersCount){
            return bControllersCount - aControllersCount
        }else{
            let aModels = a[1][1].length;
            let bModels = b[1][1].length;

            return aModels - bModels;

        }
    }
}
solution(["$app='MyApp'",
    "$controller='My Controller'&app='MyApp'",
    "$model='My Model'&app='MyApp'",
    "$view='My View'&app='MyApp'"]);


/*
let regex = /^\$(app|controller|model|view)='([^']+)'(?:&app='([^']+)')?$/;

// регекс за сплит /^(\$)[a-z]+(=')([^']+)?('&app=')?[^']+(')$/
*/