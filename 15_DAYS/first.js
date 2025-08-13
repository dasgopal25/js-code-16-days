
const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // const firstName = document.getElementById('first');
    // console.log(firstName.value);
    
    // const lastName = document.getElementById('second');
    // console.log(lastName.value);

    // const age = document.getElementById('third');
    // console.log(age.value);

    // const result  = document.getElementById('result');
    // const p = document.createElement('p');
    // p.innerText = `${firstName.value} ${lastName.value} is a good boy, Age:-${age.value}`;
    // result.append(p);

    const data = new FormData(form);

    // for(let key of data.keys())
    //     console.log(key);
    for(let [key,value] of data.entries())
        console.log(key,":",value);
        // console.log(Array.from(data.keys()));
        // console.log(Array.from(data.values()));

});