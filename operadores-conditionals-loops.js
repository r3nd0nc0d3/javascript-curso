// Operadores
console.warn('operadores');

let a = 5 + (5 -10) * 3;
let modulo = 5 % 2; //Nos devuelve el residuo de la divison 

console.log(a);
console.log(modulo);

let i = 1;
i += 4; // => 5  Hemos sumado 4 unidades al valor asignado a la variable i 
i -= 2; // => 3 Hemos restado 2 unidades al valor ultimo de la variable i
i /= 2; // =. 1.5 Hemos dividido entre 2 el valor ultimo de la variable i 
i *= 10; // 15 Hemos multiplicado por 10 el valor ultimo de la variable i 
i ++; //Hemo susmado una unidad 
i --; //Hemos restado una unidad 
console.log(i);

/*
Operadores Relacionales

>
<
>=
<=
==  2 == es comparacion de valores
=== 3 === es comparacion estricta de valores
!=
!==
*/
console.warn('operadores relacionales');

console.log(8 > 9);



/*
Operadores Logicos
! => Not
|| => Or  
          true || true = true
          true || false = true
          false || true = true
          false || flase = false
&& => And
          true && true = true 
          true && false = false 
          false && true = false 
          false && false = false
*/
console.warn('operadores logicos');

console.log(true);
console.log(!true);
console.log((9 > 12) || (9<10));
console.log((9 > 12) && (9<10));


// Condicionales
console.warn('Condicionales');

let edad = 17;

if(edad >= 18){
    console.log('El usuario es mayor de edad');
}else{
    console.log('El usuario es menor de edad');
}

edad = 21;

if(edad > 17){
    console.log('El usuario es mayor de edad');
}else{
    console.log('El usuario es menor de edad');
}

let hora = 2;

if(hora < 6){
    console.log('Dejame dormir');
}else if(hora >= 6 && hora < 12){
    console.log('Buenos dias');
}else if(hora >=12 && hora < 18){
    console.log('Buenas tardes');
}else{
    console.log('buenas noches');
}

// Operador ternario
console.warn('operador ternario');

const eresMayor = edad > 17 
? 'El usuario es mayor de edad'
: 'El usuario es menor de edad';

console.log(eresMayor);


// Switch Case
console.warn('Switch Case');

let dia = 5;

switch(dia){
    case 0:
        console.log('Es Domingo');
        break;
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miercoles');
        breack;
    default:
        console.log('Es jueves, Viernes o Sabado');
        break;
}


// Loops
console.warn('Loops');
console.warn('While Loop');

let contador = 0;

while(contador < 10){
    console.log('Bucle while',contador);
    contador++;

}

do{
    console.log('Bucle doWhile',contador);
    contador++;
}while(contador < 10);


console.warn('for Loop');
for(let i = 0; i < 10; i++){
    console.log('bucle for', i);
}

let vocales = ['Aa', 'Ee', 'Ii', 'Oo', 'Uu'];

for(let i = 0; i < vocales.length;i++){
    console.log(vocales[i]);
}

console.warn('for of Loop');
//Nos permite iterar sobre elementos iterables en javaScript como arreglos y strings

for( let vocal of vocales){
    console.log(vocal);
}

console.warn('for in Loop');

const mateoDatos = {
    nombre: 'mateo',
    apellido: 'Rendon',
    nacimiento: '1993',
    nacionalidad: 'Mexicana',
}

for (const propiedad in mateoDatos){
    console.log(`${propiedad}: ${mateoDatos[propiedad]}`);
}