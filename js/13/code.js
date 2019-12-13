function email() {
    let mail = document.getElementById("in").value;
    let pes = -1;
    let dot = -1;
    let k = 0;
    for (let i = 0; i < mail.length; i++) {
        if (mail[i] === '@') pes = i;
        if (mail[i] === '.') dot = i;
    }
    if (pes === -1) {
        alert("Нет собаки!");
        k++;
    }
    if (mail.length < 6) {
        alert("Минимальный размер - 6 символов!");
        k++;
    }
    if (pes === 0) {
        alert("Необходим минимум один символ слева от собаки!");
        k++;
    }
    if (dot < pes) {
        alert("Необходима минимум одна точка справа от собаки!");
        k++;
    }
    if ((mail.length - dot) < 3) {
        alert("Необходима минимум два символа справа от последней точки!");
        k++;
    }
    if (dot <= pes+1 && dot != -1) {
        alert("Между символом «@» и следующей за ним точкой должен быть, как минимум, один символ.");
        k++;
    }
    if (k > 0) document.getElementById("out").innerHTML ="Были ошибки";
    else document.getElementById("out").innerHTML = "Все введено верно";
}