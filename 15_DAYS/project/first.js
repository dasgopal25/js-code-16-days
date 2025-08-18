const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    let result = 0;
    let StringAmount = Array.from(data.values());
    let NumberAmount = Number(StringAmount[0])
console.log(NumberAmount);

    if (NumberAmount <= 400000) {
        result = 0;
    }
    else if (NumberAmount > 400000 && NumberAmount <= 800000) {
        result = Math.floor((NumberAmount - 400000) * 5 / 100);
    }
    else if (NumberAmount > 800000 && NumberAmount <= 1200000) {
        result = Math.floor((400000 * 5 / 100) + ((NumberAmount - 800000) * 10 / 100));
    }
    else if (NumberAmount > 1200000 && NumberAmount <= 1600000) {
        result = Math.floor((400000 * 5 / 100) + (400000 * 10 / 100) + ((NumberAmount - 1200000) * 15 / 100));
    }
    else if (NumberAmount > 1600000 && NumberAmount <= 2000000) {
        result = Math.floor((400000 * 5 / 100) + (400000 * 10 / 100) + (400000 * 15 / 100) + ((NumberAmount - 1600000) * 20 / 100));
    }
    else if (NumberAmount > 2000000 && NumberAmount <= 2400000) {
        result = Math.floor((400000 * 5 / 100) + (400000 * 10 / 100) + (400000 * 15 / 100) + (400000 * 20 / 100) + ((NumberAmount - 2000000) * 25 / 100));
    }
    else {
        result = Math.floor((400000 * 5 / 100) + (400000 * 10 / 100) + (400000 * 15 / 100) + (400000 * 20 / 100) + (400000 * 25 / 100) + ((NumberAmount - 2400000) * 30 / 100));
    }

    document.getElementById('result').innerText = `Tax Amount:- ${result}`

});