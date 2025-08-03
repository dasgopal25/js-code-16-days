const obj = document.getElementById("First");
obj.innerText = "Document Object Model";
const ul = document.getElementsByClassName("header1");
console.log(ul);
ul[2].style.backgroundColor = "blue";
obj.className = "Gopal";
console.log(obj);
const changeClass = document.getElementsByClassName("Gopal");
console.log(changeClass);

changeClass[0].style.backgroundColor = "red";

