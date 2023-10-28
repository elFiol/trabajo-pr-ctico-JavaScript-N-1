const numeroCom = parseInt(prompt("ingrese el primer numero: "));
const numeroCom2 = parseInt(prompt("ingrese el segundo numero: "));
const numeroCom3 = parseInt(prompt("ingrese el tercer numero: "));
if (numeroCom > numeroCom2 && numeroCom > numeroCom3) {
  alert(`el numero ${numeroCom} es el mayor de todos`);
} else if (numeroCom2 > numeroCom && numeroCom2 > numeroCom3) {
  alert(`el numero ${numeroCom2} es el mayor de todos`);
} else {
  alert(`el numero ${numeroCom3} es el mayor de todos`);
}