let nombre = "kenai",
  edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("Woff Woff!");
  },
};

console.log(perro);

perro.ladrar();

//Objetos literales
console.warn("Objetos literales");

const dog = {
  nombre, //Con Objetos Literales podemos asignar como valor de un atributo de un objeto, una variable de mismo nombre que el atributo y omitir la escritura del nombre de la variable como valor.
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("Woff Woff Woff!");
  },
};

dog.ladrar();

//Parametros Rest
console.warn("Parametros Rest");

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}

console.log(sumar(4, 6));
console.log(sumar(4, 6, 2, 5, 3, 6, 9));

//Spread Operator
console.warn("Operadores Spread");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//Arrow Functions
console.warn("Arrow Functions");

// const saludo = () => {
//   console.log("Hola");  //cuando se tiene solo una linea de instruccion se pueden omitir las llaves, ver siguiente ejecucion
// };

const saludo = (
  nombre //Podemos omitir los parentesis del parametro
) => console.log(`Hola ${nombre} desde una Arrow Function.`);

saludo("Mateo");

const suma = (a, b) => a + b;

console.log(suma(4, 23));

const funcionVariasLineas = () => {
  console.log("uno");
  console.log("dos");
  console.log("tres");
};

funcionVariasLineas();
