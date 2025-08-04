function RunTimer(){
    const div = document.getElementById('root');
let now = new Date();
let timer = now.toLocaleTimeString();
div.innerHTML = timer;
}

setInterval(RunTimer,1000);

const div = document.getElementById('root');

div.style.fontSize = "100px";
div.style.height = "100vh";
div.style.display = "flex"
// div.style.backgroundColor = "blue";
div.style.justifyContent = "center";    
div.style.alignItems = "center";
