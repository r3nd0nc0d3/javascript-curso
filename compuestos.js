//FUNCIONES DECLARADAS O FUNCTION DECLARATIONS
//Esta funcion es la declaracion de una funcion literal en el scope global
//por lo que podemos iinvocar la funcion antes de su declaracion
console.warn('FUNCIONES DECLARADAS')
//FUNCTIONS SIN RETORNO DE VALOR
console.warn('FUNCIONES SIN RETORNO DE VLAOR')

function funcionSinRetornoDeValor(){
    console.log('consle log');
}

funcionSinRetornoDeValor();

//FUNCTIONS CON RETORNO DE VALOR
console.warn('FUNCIONES CON RETORNO DE VLAOR')

function devuleveUnValor(a = 1, b = 2){ //le asignamor el parametro a y b, por defecto tienen valor 1 y 2 respectivamente
    return a + b;
}

let resultado = devuleveUnValor(4,8);//asignamos los argumentos 4 y 8 a los parametro a y b
console.log(resultado);

//FUNCIONES EXPRESADAS O   FUNCTION EXPRESSIONS   
//Esta es una Funcion Expresada por lo que no podemos invocarla antes de su declaracion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
console.warn('FUNCIONES EXPRESADAS');
console.warn('FUNCIONES EXPRESADAS con function');

console.error('nos arrojaria un error la invocacion de miFuncionExpresada() antes de su declaracion')
// miFuncionExpresada()

const miFuncionExpresada = function(a = 1, b = 2) {
    console.log('Esto es un console.log dentro de una funcion expresada que retorna a + b');
    return a + b;
}

let resultado2 = miFuncionExpresada();
console.log(resultado2);

//ARREGLOS O ARRAYS  
//Esta es una Funcion Expresada por lo que no podemos invocarla antes de su declaracion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
console.warn('ARRAYS');

const miArreglo = [1,2,3,4,5,6];
miArreglo.pop();
miArreglo.push(23);
console.log(miArreglo);
console.log(miArreglo.indexOf(4));