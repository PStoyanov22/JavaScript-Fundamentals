function system(arr) {
    let dataBase = new Map();
    for (let row of arr) {

        let [system, component, subcomponent] = row.split(' | ');
        if (!dataBase.has(system)) {

            dataBase.set(system, new Map());
        }
        if (!dataBase.get(system).has(component)) {

            dataBase.get(system).set(component, []);
        }
        dataBase.get(system).get(component).push(subcomponent);
    }
    let systemsSorted = Array.from(dataBase.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of systemsSorted) {
        console.log(system);
        let componentsSorted = Array.from(dataBase.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            dataBase.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(dataBase.get(s1).size != dataBase.get(s2).size) {
            return dataBase.get(s2).size - dataBase.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return dataBase.get(system).get(c2).length - dataBase.get(system).get(c1).length;
    }
}

system(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',]);