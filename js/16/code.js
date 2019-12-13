function count() {
    let u0 = document.getElementById("in1").value;
    let t =  document.getElementById("in2").value;
    let sina = (t * 9.8) / (2 * u0);
    document.getElementById("out").innerHTML = "Синус угла равен " + sina + " градусов(а)";
}