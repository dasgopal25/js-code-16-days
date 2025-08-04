const id = document.querySelector('#first');
id.innerHTML = "Hello Money";


const Header1 = document.querySelectorAll('.header1');
console.log(Array.from(Header1));

const ul_child = document.querySelector(' li')
let ul_childArray = Array.from(ul_child);
for(let val of ul_childArray){
    console.log(val);
}
// for(let i = 0 ; i<ul_childArray.length;i++){
//     console.log(ul_childArray[i].innerHTML);
// }
const h1 = document.getElementsByTagName('h1')
console.log(h1);

let ul = ul_child.parentElement;
console.log(ul);





