
let x = parseInt(prompt("Введите первое число: "));
let y = parseInt(prompt("Введите второе число: "));

let value = parseInt(prompt("Введите номер действия: "));

switch(value){
    case 1: alert(x+y); break;
    case 2: alert(x-y); break;
    case 3: alert(x*y); break;
    case 4: alert(x/y); break;
    default: alert("Такого действия не существует");
}