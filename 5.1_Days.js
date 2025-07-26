//lecture 10:Object in js (Rohit sir)
//How to create object
const obj ={
    0:20,
    7:98,
    8:56,
    name:"Gopal",
    age:20,
    "gender":"Male",
    "phone number" :6295432911,
}
 
console.log(obj);
console.log(obj.name);
console.log(obj["gender"]);
// console.log(obj.phone number);//error
// console.log(obj."phone number");//error
console.log(obj["phone number"]);
// console.log(obj.0);//error
// console.log(obj.7);//error
console.log(obj[8]);
console.log();

//create new key word
const obj1 = new Object();
//add proparty
obj1.name = "Bishnu";
obj1.age = 20;
obj1.gender="other"
obj1.roll=107;
console.log(obj1);
console.log(obj1["name"]);
//delete
delete obj1.roll;
console.log(obj1);
//update
obj1.gender = "Male";
console.log(obj1);
console.log();

//class /constructor
class People{
    constructor(na,ag,gen){
        this.name = na;
        this.age = ag;
        this.gender = gen;
    }
    
}
let pro1 = new People("Anjan",20,"male");
console.log(pro1);
console.log();

//Object.keys,
const arr = Object.keys(obj);
console.log(arr)
//Object.values,
const arr1 = Object.values(obj);
console.log(arr1)
//Object.entries
const arr3 = Object.entries(obj);
console.log(arr3)
let one = {a: 1, b: 2};
let secode = {c: 3, d: 4};
let Three = {f: 5, e: 6};
let arr4 = Object.assign({}, one, secode,Three);
console.log(arr4);
console.log();
//spread operator(...)
let arr5 = {...one, ...secode, ...Three};
console.log(arr5);
//console.log(Object.freeze(one));
// one.a = 3;
// console.log(one);
console.log();

//Object.seal()
console.log(Object.seal(one));
delete one.a;
 console.log(one.a);