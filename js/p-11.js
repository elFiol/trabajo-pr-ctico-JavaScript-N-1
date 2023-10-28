const num = parseInt(prompt("ingrese un numero: "));
let numerosDiv = "";
if (num % 2 == 0) {
  numerosDiv += "2";
}
if (num % 3 == 0) {
  numerosDiv += ", 3";
}
if (num % 5 == 0) {
  numerosDiv += ", 5";
}
if (num % 7 == 0) {
  numerosDiv += ", 7";
}
if (numerosDiv === "") {
  alert(`el numero ${num} no es divisible por 2, 3, 5, 7`);
} else {
  alert(`el numero ${num} es divisible por: ` + numerosDiv);
}
