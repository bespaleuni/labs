function square() {
    let mode = parseInt(document.getElementById("in").value);
    let answer;
    switch(mode) {
        case 1:
            answer = method1();
            break;
        case 2:
            answer = method2();
            break;
        case 3:
            answer = method3();
            break;
        case 4:
            answer = method4();
            break;
        case 5:
            answer = method5();
            break;
        case 6:
            answer = method6();
            break;
        default:
            answer = "Введите число от 1 до 6";
    }

function method1() {
    let a = parseInt(prompt("Введите сторону a:"));
    let b = parseInt(prompt("Введите сторону b:"));
    let c = parseInt(prompt("Введите сторону c:"));
    if (a + b < c || a + c < b || b + c < a) alert("Такой треугольник не существует");
    let p = (a + b + c) / 2;
    return Math.sqrt((p * (p - a) * (p - b) * (p - c)));
}

function method2() {
    let a = parseInt(prompt("Введите сторону a:"));
    let sina = parseInt(prompt("Введите синус угла альфа:"));
    let sinb = parseInt(prompt("Введите синус угла бета:"));
    let sing = parseInt(prompt("Введите синус угла гамма:"));
    if (sina < -1 || sina > 1 || sinb < -1 || sinb > 1 || sing < -1 || sing > 1) alert("Такой треугольник не существует");
    let p = 0.5 * Math.pow(a, 2) * (sinb * sing / sina);
    return p;
}

function method3() {
    let a = parseInt(prompt("Введите сторону a:"));
    let sina = parseInt(prompt("Введите синус угла альфа:"));
    let sinb = parseInt(prompt("Введите синус угла бета:"));
    let sing = parseInt(prompt("Введите синус угла гамма:"));
    return 0.5 * Math.pow(a, 2) * sinb * sing / sina; 
}

function method4() {
    alert("Треугольник должен быть прямоугольным");
    let a = parseInt(prompt("Введите сторону a:"));
    let b = parseInt(prompt("Введите сторону b:"));
    return 0.5 * a * b;
}

function method5() {
    let h = parseInt(prompt("Введите высоту:"));
    let c = parseInt(prompt("Введите основание:"));
    return 0.5 * h * c;
}

function method6() {
    let b = parseInt(prompt("Введите сторону b:"));
    let sina = parseInt(prompt("Введите синус угла альфа:"));
    let sinb = parseInt(prompt("Введите синус угла бета:"));
    let sing = parseInt(prompt("Введите синус угла гамма:"));
    let p = 0.5 * Math.pow(b, 2) * (sina * sing / sinb);
    return p;
}

document.getElementById("out").innerHTML = answer;
}