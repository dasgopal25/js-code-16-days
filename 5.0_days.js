//lecture 9:Date objrct in js(Rohit sir );
let date = new Date();
//toDateString()
console.log(date.toDateString());
//toString()
console.log(date.toString());
//toISOString()
console.log(date.toISOString());
//check typeOf
console.log(typeof date);
//01.01.1970
//.getDate()
console.log(date.getDay());
//.getDay()
console.log(date.getDay());
//.getMonth()
console.log(date.getMonth());
//.getFullYear
console.log(date.getFullYear());
//getMinutes
console.log(date.getMinutes());
//.getTime

const now = Date.now();
console.log(now);

let da = new Date("2005-07-31");

// Current date
let currentDate = new Date();

// Calculate difference in milliseconds
let diffInMs = currentDate - da;
console.log(diffInMs);


//countdown timer

let olympicDate = new Date("2028-07-21");
let currentDate1 = new Date();
let store = olympicDate - currentDate1 ;
const days = Math.floor((store/(1000*60*60*24)));
const hours = Math.floor((store/(1000*60*60)%24));
const minut =  Math.floor((store/(1000*60)%60));
const second =  Math.floor((store/(1000)%60));
console.log(`olympic timeCountdown: Days:${days}, Hours:${hours},minutes:${minut},second:${second}`);
console.log();

