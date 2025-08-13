// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const yellow = document.getElementById("yellow");
// const green = document.getElementById("green");
// const purple = document.getElementById("purple");
// const body = document.body;

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';
// });
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// });
// yellow.addEventListener('click',()=>{
//     body.style.backgroundColor = 'yellow';
// });
// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// });
// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// });

// const buttons = document.querySelectorAll('button');
//  const body = document.body;

//  buttons.forEach((button)=>{
//      button.addEventListener('click', ()=>{
//         console.log(button);
        
//         body.style.backgroundColor = button.id;
//      })
//  });

const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    if(event.target.tagName == 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
});