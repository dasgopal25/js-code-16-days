const quizData = [
    {
        question: "Who has the most centuries in international cricket?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first ICC Cricket World Cup?",
        options: ["Australia", "England", "West Indies", "India"],
        answer: "West Indies"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "What is the highest individual score in ODI cricket?",
        options: ["264", "200", "237", "275"],
        answer: "264"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Which team won the ICC T20 World Cup in 2022?",
        options: ["India", "England", "Pakistan", "Australia"],
        answer: "England"
    },
    {
        question: "Who scored the fastest century in ODI cricket?",
        options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Virat Kohli"],
        answer: "AB de Villiers"
    },
    {
        question: "Which player has the most runs in Test cricket?",
        options: ["Ricky Ponting", "Sachin Tendulkar", "Jacques Kallis", "Kumar Sangakkara"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country has won the most ICC Cricket World Cups?",
        options: ["Australia", "India", "England", "West Indies"],
        answer: "Australia"
    },
    {
        question: "Who was the first batsman to score a double century in ODI cricket?",
        options: ["Virender Sehwag", "Rohit Sharma", "Sachin Tendulkar", "Chris Gayle"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Who holds the record for most sixes in international cricket?",
        options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "AB de Villiers"],
        answer: "Chris Gayle"
    },
    {
        question: "Which bowler has the most wickets in ODI cricket?",
        options: ["Muttiah Muralitharan", "Wasim Akram", "Glenn McGrath", "Brett Lee"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Which stadium is known as the 'Home of Cricket'?",
        options: ["Lord's", "MCG", "Eden Gardens", "The Oval"],
        answer: "Lord's"
    },
    {
        question: "Who was the first captain to win all three ICC trophies?",
        options: ["MS Dhoni", "Ricky Ponting", "Clive Lloyd", "Kapil Dev"],
        answer: "MS Dhoni"
    },
    {
        question: "Which cricketer is called 'Captain Cool'?",
        options: ["MS Dhoni", "Kane Williamson", "Steve Waugh", "Eoin Morgan"],
        answer: "MS Dhoni"
    },
    {
        question: "Which player has the most runs in a single ICC Cricket World Cup edition?",
        options: ["Rohit Sharma", "Sachin Tendulkar", "Kumar Sangakkara", "Matthew Hayden"],
        answer: "Rohit Sharma"
    },
    {
        question: "Who bowled the first ball in the history of Test cricket?",
        options: ["Fred Spofforth", "Allen Hill", "Charles Bannerman", "Billy Midwinter"],
        answer: "Allen Hill"
    },
    {
        question: "Which team won the 2011 ICC Cricket World Cup?",
        options: ["India", "Sri Lanka", "Australia", "Pakistan"],
        answer: "India"
    },
    {
        question: "Which player has the most ducks in international cricket?",
        options: ["Muttiah Muralitharan", "Shahid Afridi", "Sanath Jayasuriya", "Courtney Walsh"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Who was the first cricketer to hit 6 sixes in an over in international cricket?",
        options: ["Yuvraj Singh", "Garry Sobers", "Herschelle Gibbs", "Kieron Pollard"],
        answer: "Herschelle Gibbs"
    },
    {
        question: "Which country hosted the first ICC T20 World Cup?",
        options: ["South Africa", "India", "England", "Sri Lanka"],
        answer: "South Africa"
    },
    {
        question: "Which player has scored the most 50+ scores in T20 internationals?",
        options: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "David Warner"],
        answer: "Virat Kohli"
    },
    {
        question: "Who is the only bowler to take 10 wickets in a single Test innings?",
        options: ["Anil Kumble", "Jim Laker", "Ajaz Patel", "Muttiah Muralitharan"],
        answer: "Jim Laker"
    },
    {
        question: "Who was the youngest player to debut in international cricket?",
        options: ["Hasan Raza", "Sachin Tendulkar", "Mohammad Amir", "Rashid Khan"],
        answer: "Hasan Raza"
    },
    {
        question: "Which batsman has the highest batting average in Test cricket?",
        options: ["Don Bradman", "Steve Smith", "Graeme Pollock", "Herbert Sutcliffe"],
        answer: "Don Bradman"
    }
];

function RandomQuestion(n){
//     let data  = new Set();
      
//     while(data.size!=5){
//         let index = Math.floor(Math.random()*20);
//         data.add(quizData[index]);
//     }
//    return [...data];


//  quizData.sort(()=> Math.random() - 0.5);
//   return quizData.slice(0,5);

 const arr = [];
 let length = quizData.length;

 for(let i = 0 ; i< n ; i++){
    const index = Math.floor(Math.random()*length);
    arr.push(quizData[index]);
  
   let temp = quizData[index];
   quizData[index] = quizData[length-1];
   quizData[length-1] = temp;
    
   length--;
 }

 return arr

}



const form = document.querySelector('form');

const input  = document.getElementById('number');

let problem= RandomQuestion(5);

const original_answer = {};

problem.forEach((obj,index)=>{
const div_element = document.createElement('div');
const p = document.createElement('p');
p.innerHTML= `${index+1}. ${obj['question']}`;

original_answer[`q${index+1}`] = obj['answer'];

div_element.appendChild(p);
console.log(obj['options']);

obj['options'].forEach((data)=>{
const label = document.createElement('label');
// label.htmlFor = "gopal";
const input  = document.createElement('input');
input.type = 'radio';
input.name = `q${index+1}`;
input.value = data;
div_element.appendChild(label);
label.appendChild(input);
label.appendChild(document.createTextNode(data));
div_element.appendChild(document.createElement('br'));
});

form.appendChild(div_element);

 });

 const button =  document.createElement('button');
button.type = 'submit'
button.className = "submit-btn"
button.textContent = "Submit";

form.appendChild(button);


form.addEventListener('submit',(event)=>{
   event.preventDefault();
   let result = 0
   const data = new FormData(form);

   for(let [key,value] of data.entries()){
       if(value === original_answer[key]){
            result++;
       }
   }
   document.getElementById('result').innerHTML = `${result} out of 5 is correct`;
   form.reset();
});

