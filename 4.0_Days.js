//Maths in js
let num1 = 231.54;
let num2 = new Number(231);
let num3 = new Number(231);
console.log(num1 == num2);//true first of all convert num2 object to number then compare
console.log(num2 == num3);//false 2 variable is a object so that don't convert any data type direct compare
console.log();

//num in build function
console.log(num1.toFixed(1));
console.log(num1.toPrecision(5));
console.log(num1.toString());
console.log(num1.toExponential(1));
console.log(num1.valueOf());
console.log();

//  MATH

// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.PI);
// console.log(Math.LOG10E);

console.log(Math.floor(num1));
console.log(Math.ceil(num1));

console.log(Math.floor(Math.random()*10)+1);
//print 40 - 50 formula:- \
let min = 40;
let max = 50;
console.log(Math.floor(Math.random()*(max - min + 1))+min);
