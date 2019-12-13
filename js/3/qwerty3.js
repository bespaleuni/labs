let str = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
let vow = 0;
let cons = 0;
let name = prompt('Введите ваше имя: ');
for (let i = 0; i < name.length; i++)
    for (let j = 0; j < str.length; j++)
        if (name[i] == str[j]) vow++;

cons = name.length - vow;
document.getElementById('a').innerHTML = vow + ' ' + cons;