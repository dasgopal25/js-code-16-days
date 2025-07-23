//lecture 6:String in js(Rohit sir );
//primitive data type (const)
// const num = 10;
// num =20;
// console.log(num);//TypeError: Assignment to constant variable.

//Non premitive data type
const obj = {
    id : 30,
    name:"Gopal"
}
obj.id = 20;
 console.log(obj);//{ id: 20, name: 'Gopal' }
 console.log();
 
 const ob2 = {
    id : 39
}
//location of ob2 is 800
//location of obj is 6521
//  obj = ob2;
 //error

 //String 
 let str1 = "hello Hello HELLO"
 let str2 = 'hii hii  hiii';
 let num = 20;
 let str3 = `print price is ${num}`;
 console.log(str3);//print price is 20
 console.log("hoo woo huu haa ", num);//hoo woo huu haa  20
 
 
 //String concatentation
 let s1 = "hello";
 let s2 = " Coder Army";
 console.log(s1+s2);
 //string length
 console.log(s1.length); //5
 
 //escape character '\'
 let commet = "Myself Gopal das. \\n i am a college student";
 console.log(commet);
 console.log();
 console.log();
 
 let special = "Rohit";
 console.log(special[4]);
 console.log(special.charAt(3));
 
 //to lowercase
 console.log(special.toLowerCase());
 //to upercase
 console.log(special.toUpperCase());
 //indexof
 let str4 = " gopal! bishnu! anjan! bishnu"
 console.log(str4.indexOf("bishnu"));
 //lastindex
 console.log(str4.lastIndexOf("bishnu"));
 //includes
  console.log(str4.includes("bishnu"));
  console.log();
  console.log();
  //slice:- slice can take nehative index also;
  console.log(special.slice(0,3));
  console.log(special.slice(-5,3));
  //substring
   console.log(special.substring(0,3));
  
  //replace
  let str6 = " gopal Dash ";
  console.log(str6.replace("Dash","das"));
  //split
  console.log(str4.split("! "));//[ ' gopal', 'bishnu', 'anjan', 'bishnu' ]
  //trim
  console.log(str6.trim().length);
  console.log(str6.length);
console.log();

//New way to create string
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring);
console.log(typeof lasteststring);

