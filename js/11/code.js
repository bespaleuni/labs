function text() {
    let str = document.getElementById("in").value;
    let arr = str.split(" ");
    let max, min, av = 0;
    max = arr[0].length;
    min = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) max = arr[i].length;
        if (arr[i].length < min) min = arr[i].length;
        av += arr[i].length;
    }
    av /= arr.length;
    document.getElementById("out").innerHTML = min+'\n'+max+ '\n' + av;
}