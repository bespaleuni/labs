function count() {
    let str = document.getElementById("in").value;
    str = str.split(' ');
    let s = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++)
        {
            if (str[i][j] == 'a') {
                s += 'o ';
                break;
            }
            s += str[i][j];
        }
    }
    document.getElementById("out").innerHTML = s;
}
