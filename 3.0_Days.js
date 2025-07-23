//lecture 5 (Rohit Negi sir)
//primitive data type vs Non-primitive data type
// Primitive data type: Immutable
//Non-primitive data type:Mutable\

//Immutable
let a = 20;
let b = a;
b= 40;//call by value
console.log(a);//20
console.log(b);//40
console.log();
//Mutable
let obj1 = {
    name:"gopal",
    id:230
}

let obj2 = obj1
 obj2.id = 30;//call by reference

 console.log(obj1);//{ name: 'gopal', id: 30 }
 console.log(obj2);//{ name: 'gopal', id: 30 }
console.log();

//stack and heap memory.....
//primitive data type store stack memory
//Non-primitive data type store heap memory

 