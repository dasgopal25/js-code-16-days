//declare the variable

let name = "Gopal Das";
console.log(name);

//primitive data type and Non-primititive data type
/*primititive data type{
number
string
boolean
Biging
Null
Undefine
symbol
}

Non-primititive data type{
Array
Object
function
}
*/

//check the data type to ues 'typeof()' example
let balance = 12;
console.log(typeof(balance));//number type
let name_passBook = name;
console.log(typeof(name_passBook));//string

//Null vs Undefined
let bal = null;
console.log(typeof(bal));// Object
let account;
console.log(typeof(account));// Undefinded

//Bigint 
let number = 8955489815459575775754n; //'n' use to show that number is so big and datatype is bigint 
console.log(typeof(number));//bigint //range +[2^53-1] to  -[2^53 - 1]

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991

console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991





