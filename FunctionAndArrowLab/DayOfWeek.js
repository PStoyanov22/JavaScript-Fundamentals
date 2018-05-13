function dayOfWeek(day){
    let week  = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let index = week.indexOf(day)
    return  index > -1 ? index + 1 : "error"

}

console.log(dayOfWeek("monday"));