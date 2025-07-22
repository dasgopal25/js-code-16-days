//welcome js day two...
//Non primititive data type class

//Array [any type of data can store together]
let arr = [20,36,"Gopal Das",7.5];
console.log(typeof arr); //object


//Object key:value
let obj = {
    user_name:"Gopal",
    account : 645367437647,
    balance: 420
}

console.log(obj);

//function ka typeof function hota hai
let fun = function (){
        console.log("Hello, 2nd days class...");   
}

fun();

function fun1(){
    console.log("kiya...");
}
fun1();
console.log();
console.log();


//Type conversion
//String to number 
let balance = "100";
let num = Number(balance);

console.log(typeof(balance));
console.log(typeof(num));

//boolean to number
let x = true;
console.log(Number(x));
console.log(typeof x);

//NaN example
let srt = "100cs";
console.log(Number(srt));//NaN (Not a Number)

let x1 = null;
console.log(Number(x1)); //0(0 = null) output

let x2 = undefined;
console.log(Number(x2));//NaN

console.log();
console.log();

//Operator
//rules
//Brackets
//Divide and Multiply  Left to Right 
//Add and Sub  Left to Right

console.log(20%4);

//Assignment operator







