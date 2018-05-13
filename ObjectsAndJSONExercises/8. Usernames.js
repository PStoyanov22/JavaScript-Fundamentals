function usernames(arr){
   let usernames = new Set();
    for (let user of arr) {
        usernames.add(user)
    }
    let sortedUsers = [...usernames.keys()].sort((a, b) => sorting(a, b));

    function sorting(a, b) {
        let firstCriterion = a.length - b.length;
        if (firstCriterion !== 0) {
            return firstCriterion
        } else {
            return a.localeCompare(b);
        }

    }

    for (let user of sortedUsers) {
        console.log(user)
    }

}
usernames(['Ashton',
           'Kutcher',
           'Ariel',
           'Lilly',
           'Keyden',
           'Aizen',
           'Ashton',
           'Billy',
           'Braston']);