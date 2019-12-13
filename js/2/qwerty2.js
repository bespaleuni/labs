let arr = [null];
let sum;
let max = 0;

for (let i = 0; i < 3; i++)
    arr[i] = prompt('Введите массу: ');

let min = arr[0];
sum = null;

for (let i = 0; i < 3; i++)
    sum += Number(arr[i]);

for (let i = 0; i < 3; i++)
    if (arr[i] > max) max = arr[i];

for (let i = 0; i < 3; i++)
    if (arr[i] < min) min = arr[i];

    document.getElementById('arr').innerHTML = sum+ " " + max + " "+min;
