const parrafo = prompt("ingrese un texto: ");
let vocales = "";
for (let i = 0; i < parrafo.length; i++) {
  const caracter = parrafo.charAt(i).toLowerCase();
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    vocales += caracter;
  }
}
alert(`se encontraron: ${vocales}`);