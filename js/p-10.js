const num = parseInt(prompt("ingrese un numero: "));
if (num % 2 === 0) {
  alert(`el numero ${num} es divisible por 2`);
} else if (num % 3 === 0) {
  alert(`el numero ${num} es divisible por 3`);
} else if (num % 5 === 0) {
  alert(`el numero ${num} es divisible por 5`);
} else if (num % 7 === 0) {
  alert(`el numero ${num} es divisible por 7`);
} else {
  alert(`el numero ${num} no es divisible por 2,3,5 y 7`);
}