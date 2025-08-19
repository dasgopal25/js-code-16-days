let memberInfo = [
    { 
        name: "Gopal Das",
        payAmount: 1217 ,
        eat_price:0,
        mealCount:17,
        pay: 0 ,
        get: 0
     },
    {
         name:"Saker Khan",
        payAmount: 1163,
        eat_price:0,
        mealCount:35 ,
        pay:0 ,
        get:0 
     },
    { 
        name:"Sayan Dey",
        payAmount:524 ,
        eat_price:0,
        mealCount:26 ,
        pay: 0,
        get: 0
     },
    { 
        name:"Sovan Jana",
        payAmount:1285 ,
        eat_price:0,
        mealCount:33 ,
        pay:0 ,
        get: 0
     },
    { 
        name:"Sandipan Pal",
        payAmount:1269 ,
        eat_price:0,
        mealCount: 30 ,
        pay:0 ,
        get: 0 
     },
    { 
        name:"SK Asfer",
        payAmount:870 ,
        eat_price:0,
        mealCount:30 ,
        pay: 0,
        get: 0
     },
    { 
        name:"Mostakin Mondal",
        payAmount:185 ,
        eat_price:0,
        mealCount:24 ,
        pay: 0,
        get: 0
    },
];

const table = document.querySelector("table");

let Total = 0;
let Total_Meal = 0;
let Total_eat = 0;
// first calculate total amount and meals
for (let obj of memberInfo) {
    Total += obj.payAmount;
    Total_Meal += obj.mealCount;
}

// now calculate per meal price
let PerMeal = (Total / Total_Meal).toFixed(2);



// update each member's eat_price
for (let obj of memberInfo) {
    obj.eat_price = (obj.mealCount * PerMeal).toFixed(2);
    Total_eat += parseFloat(obj.eat_price);
      
    if(obj.payAmount - obj.eat_price >= 0){
        obj.pay = Math.ceil(obj.payAmount - obj.eat_price);
    }else{

        obj.get = Math.abs(obj.payAmount - obj.eat_price);

    }
   
    

    const tr = document.createElement("tr");
    Object.values(obj).forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    });
    table.appendChild(tr);
}

// add total row
const tr = document.createElement("tr");
const th = document.createElement("th");
const totalAmound = document.createElement("th");
const Eat_price = document.createElement("th");
const totalMeal = document.createElement("th");
const th1 = document.createElement("th");
const th2 = document.createElement("th");

th.innerHTML = "Total_Amount";
totalAmound.innerHTML = Total;
Eat_price.innerHTML = Total_eat.toFixed(2);
totalMeal.innerHTML = Total_Meal;
th1.innerHTML = `Per Meal price ${PerMeal}`;

tr.appendChild(th);
tr.appendChild(totalAmound);
tr.appendChild(Eat_price);
tr.appendChild(totalMeal);
tr.appendChild(th1);
tr.appendChild(th2);
table.appendChild(tr);

// form event
const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
     event.preventDefault();
     const Name = document.getElementById("Name").value;
     console.log("Submitted Name:", Name);
});
