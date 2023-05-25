var pjg, lbr, luas, kel;
// function persegipanjang() {
//   p = parseInt(document.getElementById("angka1").value);
//   lbr = parseInt(document.getElementById("angka2").value);
//   luas = pjg * lbr;
//   kel = 2 * (pjg + lbr);
//   document.getElementById("luas").innerHTML = luas;
//   document.getElementById("keliling").innerHTML = kel;
// }
function luas() {
  var p = document.getElementById("p").value;
  var l = document.getElementById("l").value;

  var luas = p * l;
  document.getElementById("luas").innerHTML = luas;
}
function kel() {
  var p = +document.getElementById("p").value;
  var l = +document.getElementById("l").value;

  var kel = 2*(p + l);
  document.getElementById("kel").innerHTML = kel;
}
