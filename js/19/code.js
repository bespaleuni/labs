function chill() {
    let str = document.getElementById("in").value;
    let arr = [], k = 0, c = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (str[i] == arr[j]) k++;
        }
        if (k == 0) {
            arr[c] = str[i];
            c++;
        }
        k = 0;
    }
    document.getElementById("out").innerHTML = arr;
}