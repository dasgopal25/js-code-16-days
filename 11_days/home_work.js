const div = document.getElementById('root');

function RunTimer() {
    let olympicDate = new Date("2028-07-21");
    let now = new Date();
    let store = olympicDate - now;

    const days = Math.floor(store / (1000 * 60 * 60 * 24));
    const hours = Math.floor((store / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((store / (1000 * 60)) % 60);
    const seconds = Math.floor((store / 1000) % 60);

    const output = `Olympic Time Countdown:<br>Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
    div.innerHTML = output;
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(`rgb(${red}, ${green}, ${blue})`)
    return `rgb(${red}, ${green}, ${blue})`;
}

setInterval(RunTimer, 1000);

div.style.fontSize = "50px";
div.style.height = "100vh";
div.style.width = "100vw"; // Changed to full width
div.style.display = "flex";
div.style.justifyContent = "center"; // ✅ fixed
div.style.alignItems = "center";
div.style.textAlign = "center"; // ✅ added

setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 1000);
