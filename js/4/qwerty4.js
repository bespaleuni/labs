function count() {
    let str = document.getElementById("g").value;
    let l = str[4];
    let c = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] === l) c++;
    document.getElementById("b").innerHTML = c;
}

