function fibka() {
    let n = document.getElementById("in").value;
    let arr = [], k = 0, c = 0;
    for (let i = 0; i < n; i++) {
        if (i == 0)
            arr.push(0);
        else if (i == 1) arr.push(1);
        else arr.push(arr[i-1]+arr[i-2]);
    }
    document.getElementById("out").innerHTML = arr;
}