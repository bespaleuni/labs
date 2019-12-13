function userSubmit() {
    let x = document.getElementById('userInput').value;
    let y = (Math.pow(x, 2) - 7*x + 10) / (Math.pow(x, 2) - 8*x + 12);
    document.getElementById('result').innerHTML = y;
}
