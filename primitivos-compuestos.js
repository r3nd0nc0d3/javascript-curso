console.warn("Declaracion de variables");

var varibale = "Hola Mundo";
let variableConLet = "Hello World";
const constante = 0;

console.log(varibale);
console.log(variableConLet);
console.log(constante);

{
  console.warn("dentro del block scope");
  var varibale = "amigos";
  console.log(varibale);
  let variableConLet = "frineds";
  console.log(variableConLet);
}

//var aun estando dentro del scope de bloque ha cmabiado el valor
//de la variable y lo mantiendo aun saleindo de ese scope
//mientras que let cambia su valor solo dentro del scope de bloque
//pero al salir el vlaor es el mismo establecido al inicio
console.warn("fuera del block scope");
console.log(varibale);
console.log(variableConLet);
console.error("const no permite cmabair tipo de valores");
