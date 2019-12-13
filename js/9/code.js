function time() {
    let date = new Date();
    let tim = [date.getHours(),date.getMinutes(),date.getSeconds()];
    let eat = ''; let rest = '';
    if ((tim[0] >= 9 && tim[0] < 18) || (tim[0] == 18 && tim[1] == 0)) rest = "Работа";
    if ((tim[0] == 18 && tim[1] == 1) || (tim[0] >= 18 && tim[0] < 23) ||(tim[0] == 23 && tim[1] == 0)) rest = "Отдых";
    if ((tim[0] == 23 && tim[1] == 1) || (tim[0] >= 23 || tim[0] < 6) ||(tim[0] == 6 && tim[1] <= 30)) rest = "Сон";
    if ((tim[0] == 7) || (tim[0] == 8 && tim[1] == 0))  eat = "Завтрак";
    if ((tim[0] == 13) || (tim[0] == 14 && tim[1] == 0))  eat = "Обед";
    if ((tim[0] == 19) || (tim[0] == 20 && tim[1] == 0))  eat = "Ужин";
    document.getElementById("out").innerHTML =tim[0]+':'+tim[1]+ '\n' + rest + '\n' + eat;
}