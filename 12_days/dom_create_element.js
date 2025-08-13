//Create Element in DOM
// const root = document.getElementById('root');
// const h1 = document.createElement('h1');
// h1.innerHTML = "Hello H1 Tag";
// root.appendChild(h1);
const quotes = [
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
  "Dream big and dare to fail. – Norman Vaughan",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "Act as if what you do makes a difference. It does. – William James",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Turn your wounds into wisdom. – Oprah Winfrey",
  "Doubt kills more dreams than failure ever will. – Suzy Kassem",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt"
];

//create project
function Generate(){
const text = document.getElementById('quotes');
let random = Math.floor(Math.random()*quotes.length);

text.innerHTML = quotes[random];
}
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(`rgb(${red}, ${green}, ${blue})`)
    return `rgb(${red}, ${green}, ${blue})`;
}
setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 1000);
setInterval(() => {
    document.getElementById('outer').style.backgroundColor = getRandomColor();
}, 5000);
setInterval(() => {
    document.getElementById('inner').style.backgroundColor = getRandomColor();
}, 3000);
 setInterval(Generate, 3000);



 // <li>TS</li>

// Created an element
// function attach(content){
// const element = document.createElement('li');
// element.innerHTML = content;

// const element2 = document.createElement('li');
// element2.innerHTML = content+"V2.0";

// const parent = document.getElementById("root");
// // parent.appendChild(element);
// // parent.append(element,element2);
// };

// attach("TS");
// attach("React");
// attach("Node");


// *****************TextNode*******************

// const element = document.createTextNode("Hello Coder Army");

// const parent = document.getElementById("root");
// parent.append(element);


// *****************Attribute Node*******************

// const element = document.createAttribute("id");
// element.value = "first";


// access to first list
// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);


// access to second list

// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);



// access attribute of a element

// const element  = document.getElementById("root");
// // console.log(element.getAttribute("style"));
// element.setAttribute("custom", "20");
// element.setAttribute("class", "Roahn");
// element.removeAttribute("custom");




// ***********Add nodes to the DOM************


// const parent = document.getElementById("root");
// array

// const element = document.createElement('li');
// element.innerHTML = "TS";
// data


// parent.prepend(element);
// parent.append(element);

// const child2 = parent.children[1];
// // parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);



// const parent = document.getElementById("root");
// // parent.innerHTML += "<li>TS</li>";

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// // parent.insertAdjacentElement("beforebegin", element);
// parent.insertAdjacentElement("afterend", element);



// Delete node or element

// const element = document.querySelector('li');
// element.remove();







