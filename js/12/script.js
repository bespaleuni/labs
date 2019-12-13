function reverseStr(str) {
    return str.split("").reverse().join("");
}

let string1 = prompt('Введите слово:');
let string2 = reverseStr(string1);
if (string1 === string2)
{
    document.getElementById('placeForText').innerHTML='Строка является палиндромом';
}
else
{
    document.getElementById('placeForText').innerHTML='Строка не является палиндромом';
}
