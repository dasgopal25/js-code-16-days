//lecture 8:Array in js(Rohit sir );
let arr = [2,3,4,5,5,"Gopal",true];
console.log(arr[5]);
console.log(arr.at(-1));//accept negetive index
console.log(arr.length);

////structuredClone()
const newarr  = structuredClone(arr);
console.log(newarr);
console.log(arr == newarr);
console.log(arr === newarr);
console.log();
console.log(arr);

//unshift, add element at start
arr.unshift(20)
console.log(arr);
//push Add element at end
arr.push(39)
arr.push(40)
console.log(arr);
//shift, delete the first element from array
arr.shift()
console.log(arr);
//pop, pop the last element from array
arr.pop()
console.log(arr);
//delete 
delete arr[5];
console.log(arr);
//indexOf()
console.log(arr.indexOf(5));
//LastIndexOf
console.log(arr.lastIndexOf(5));
//includes
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);

//slice(start index, last index) original array not change
console.log(arr.slice(0,4));
//splice (startIndex, needElement,add_SameIndexotherdata,add_SameIndexotherdata ) change original array
let arr1 = [78,54,34,67,"gopal","ikdyh",95,47]; 
console.log(arr1);
console.log( arr1.splice(4,arr1.length-1));
console.log(arr1);
//toString()
console.log(arr.toString());
//join(" ")
console.log(arr.join("*"));
//concat(arr_name,arr_name) two array join and one array
let arr2 = [6,7,5,7];
let arr3 = [7,3,4,5];
let arr4 = arr1.concat(arr2,arr3);
console.log(arr4);
//arr.push(arr4);
//console.log(arr1);     
//flat(Infinity) 2d to convert 1d array
let a = [5,6,[7,8],6,5];
console.log(a.flat(1));
//array create new keyword
let ac = new Array(2,45,6,43,23,34);
let ac1 = new Array(2); //single value allowcated array size 
console.log(ac);
console.log(ac1);

 