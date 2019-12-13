function randomarr () {
    let n = document.getElementById("in").value;
    let arr = [];
    let min = Math.ceil(0);
    let max = Math.floor(10);
    let sum = 0;
    for (let i = 0; i < n; i++)
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < n; i++) sum += arr[i];
    document.getElementById("out1").innerHTML = "Элементы массива: " + arr;
    document.getElementById("out2").innerHTML = "Сумма элементов массива: " + sum;
}