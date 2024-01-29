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

const miArreglo = ['hola', 'mundo', 12, ['arreglo',['dentro','de otro']]];
console.log(miArreglo.indexOf(12));
console.log(miArreglo[1]);
console.log(miArreglo[1][2]);
console.log(miArreglo[3][1][0]);
miArreglo.pop();
miArreglo.push('ultimo elemento');
console.log(miArreglo);

const c = Array.of('X','Y','Z',9,8,7);
console.log(c);

const d = Array(50).fill('repeat');
console.log(d);

const colores = ['rojo', 'azul', 'verde'];
colores.push('negro');
console.log(colores);
colores.pop();
console.log(colores);

colores.forEach(function(el){
    console.log(`<li>${el}</il>`);
})

//Objetos  
//Dentro de los objetos las variables son atributos o propiedades y las funciones son metodos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
console.warn('OBJETOS');

const mateo = {
    nombre: 'Mateo',
    apellido: 'Rendon',
    edad: 30,
    pasatiempo: ['gym', 'programming', 'cine'],
    contacto:{
        email:'rendoncode@gmail.com',
        movil:'5518176360'
    },
    saludar:function(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios`);
    }

}

console.log(mateo);
// Accrder a valores
console.log(mateo.nombre);
console.log(mateo.pasatiempo[1]);
mateo.saludar()
console.log(Object.keys(mateo));
console.log(Object.values(mateo));
console.log(mateo.hasOwnProperty('nombre'));


