function belong() {
    let dotx = document.getElementById("in1").value;
    let doty = document.getElementById("in2").value;
    let cirx = document.getElementById("in3").value;
    let ciry = document.getElementById("in4").value;
    let r = document.getElementById("in5").value;
    let str;
    if (Math.pow((dotx-cirx), 2) + Math.pow((doty-ciry), 2) <= Math.pow(r, 2)) str = "Принадлежит";
    else str = "Не принадлежит";
    document.getElementById("out").innerHTML = str;
}