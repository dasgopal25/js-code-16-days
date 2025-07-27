//lecture 12:Function in js(Rohit sir)
//narmal function
function first(){
    console.log("hello function");
}
first();
function add(number,number1){
    console.log(number+number1);
}
add(4,5);
//arraw function 
const fun = ()=>{
    console.log("Myself Arraw function");
}
fun();
const one_line = number => number+ number 
console.log(one_line(4),"/////");
//store function in a variable
const fun12 = function(){
    console.log("Store function in a variable");
}
fun12();
//function use rest oparetor to a paramiter
const sum = function(...number){
    let result = 0
    for(let i = 0;i<number.length;i++){
        result+= number[i]
    }
    console.log(result);
}
sum(5,6,7);
sum(3,8,9,8,2,23);
sum(74,59,72,10);