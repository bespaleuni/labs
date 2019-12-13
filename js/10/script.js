function simpa() {
    let k = 0;
    let ar = [];
    for (let i = 2; i < 11; i++) {
        if (i === 2 || i === 3) {
            ar[k] = i;
            k++;
        }
        if (i % 2 === 0 || i % 3 === 0) continue;
        else {
            ar[k] = i;
            k++;
        }
    }
    document.getElementById("out").innerHTML = ar + ' - простые';
}