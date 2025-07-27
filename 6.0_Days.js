//lecture 11:Object in js part 2 (Rohit sir)
//shallow copy

//deep copy
//let obj3 = structuredClone()
//nested object

//Destructring of an Object
let obj ={
    name:"Gopal Das",
    age: 20,
    gender: "Male",
    amount:400,
    aadhar:2474784681
}
// const { name , age , gender} = obj;
// const { name:full_name,age:Umar , gender:sex} = obj;
// console.log(name,age,gender);
// console.log(full_name,Umar,sex);


//rest oparetor / spread oparetor '...'
// const {name,age,...obj1} = obj;
// console.log(obj1.aadhar);

//Nestobject Destructring
// let obj2 ={
//     name:"Gopal Das",
//     age: 20,
//     info:{
//     aadhar:2474784681,
//     card:837
//     }
// }
// const {name1 , info:{aadhar:u}} = obj2;
// console.log(name,u );

//Array Destructring
let arr = [7,54,9,[5,3],3];
const [first, second,,Three] = arr;
console.log(first,Three[1]);

//prototype chaining
//Object or Array create karna ka time main uska prototype add ho jata hai..

let arr1 = [10,20,30];

console.log(arr.__proto__ == Array.prototype);//true
console.log(arr.__proto__.__proto__ == Object.prototype);//true
console.log(arr.__proto__.__proto__.__proto__ == null);//true