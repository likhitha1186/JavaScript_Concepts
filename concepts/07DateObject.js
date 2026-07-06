let d= new Date()
console.log(d); //2026-07-06T16:56:57.188Z

//get the current date [1-31]
console.log(d.getDate()); //6

//get the current month [0-11]
console.log(d.getMonth());  //6 [july]
console.log(d.getMonth()+1); //7

//get the current year
console.log(d.getFullYear()); //2026

console.log(d.getHours()); // [0-23]
console.log(d.getMinutes());  //  [0-59]
console.log(d.getSeconds());  //  [0-59]