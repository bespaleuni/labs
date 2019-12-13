function count() {
    let y = [], k = 0;
    for (let i = 0.1; i <= 0.8; i+=0.05){
         y[k] = 4 * Math.sin(i) - 0.5 * Math.sin(i);
         y[k] = y[k].toExponential(2);
         k++;
    }
        document.getElementById("out").innerHTML = y;
}