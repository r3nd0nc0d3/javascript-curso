//VARIABLES
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
console.log('git new');



//CADENAS DE TEXTO
console.warn("Metodos DE STRINGS");
let nombre = 'Mateo';
let apellido = 'Rendon';
let saludo = new String('Hola Mundo');
let lorem = '     Lorem ipsum, dolor sit amet    ';

console.log(nombre, apellido, saludo);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,//Retorna la longitud de un string
  nombre.toUpperCase(),//.toUpperCase() pasa todo el strign a mayusculas
  apellido.toLowerCase(), // .toLowerCase() pasa todo el string a minusculas
  nombre.includes('e'), //.includes() verifica si un caracter o cadena de caracteres esta en un string. 
  lorem,
  lorem.trim(), //.trim() quita los espacios en blanco al rededor del texto.
  lorem.split(' '), //.split() permite separar un string tomando un caracter como parametro y genera un array
  );
  
//  TEMPLATE STRINGS
console.warn("TEMPALTE STRINGS");
let slaudoConcat = 'Hola mi nombre es ' + nombre + ' ' + apellido;
console.log(slaudoConcat); //aqui estamos concatenando varios strings
let saludoTemplate = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludoTemplate); //Aqui estamos generando un template literal que permite interpolar datos en un string (usa ``)

//NUMBERS
console.warn("NUMBERS");
let a = 2;
let b = new Number(1);
let c = 7.19;
let d = '5.6'

console.log(c.toFixed(1));//.toFixed() redondea decimales a la alza si el segundo es >=5 y toma como parametro la cantidad  de decimales
console.log(parseInt(c));//parseInt() devuelve la parte integer de un number con decimal
console.log(c + d);
console.log(c + parseInt(d));//Nos arrojara la suma de la parte integers pero tiene problemas con decimales => 12.1900000000001
console.log(c + parseFloat(d));//Nos hace la suma de todos los numeros integers y decimales

//BOOLEANS
console.warn("BOOLEANS");

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false)

console.log(Boolean(''));//Strings vacios tienden a arrojar false => false
console.log(Boolean(' '));//Strings con caracteres tienden a arrojar false => false

//Checar MDN para mas referencias

//null undefined NaN
let indefinida;
let nulo = null;
let noNumero = 312 * 'hola';

console.log(indefinida);
console.log(nulo);
console.log(noNumero);

