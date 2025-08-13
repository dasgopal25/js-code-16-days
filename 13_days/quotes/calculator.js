const Add = document.getElementById('submit');
const Result = document.getElementById('result');
Add.addEventListener('click',()=>{
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
let value1 = Number(num1.value);
let value2 = Number(num2.value);
console.log(value1 );

let result = value1 +value2;
 Result.innerHTML = ("Result: " + result);

 });