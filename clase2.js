//Variables y Tipos de Datos

console.log("1.VARIABLES Y TIPOS DE DATOS");
//1. Declara una variable llamada `nombre` y asígnale un valor de tipo `string`.
const nombre = "Juanita";
//2. Declara una variable llamada edad y asígnale un valor de tipo `number`.
let edad = 30;
//3. Declara una variable llamada `puedoConducir` y asígnale un valor de tipo `boolean` .
let puedoConducir = true;
//4. Para cada variable se debe imprimir por consola el resultado de cada variable declarada.
console.log("nombre:", nombre);
console.log("Edad:", edad);
console.log("puedoConducir:", puedoConducir);
//5. Para cada variable se debe imprimir el tipo de dato que es por consola.
console.log("La variable nombre es de tipo:", typeof nombre);
console.log("La variable edad es de tipo:", typeof edad);
console.log("La variable puedoConducir es de tipo:", typeof puedoConducir);

//Operadores Aritméticos

console.log("2.OPERADORES ARITMÉTICOS");
const numero1 = 20;
const numero2 = 40;

//1. `Suma (+)`: Suma numero1 y numero2. Muestra el resultado por consola.

let suma = numero1 + numero2;
console.log("El resultado de la suma es ", suma);
//2. `Resta (-)`: Resta numero1 y numero2. Muestra el resultado por consola.
let resta = numero1 - numero2;
console.log("El resultado de la resta es ", resta);
//3. `Multiplicación (*)`: Multiplica numero1 y numero2. Muestra el resultado por consola.
let Multiplicacion = numero1 * numero2;
console.log("El resultado de la mutiplicacion es ", Multiplicacion);
//4. `División (/)`: Divide numero1 y numero2. Muestra el resultado por consola.

let Division = numero1 / numero2;
console.log("El resultado de la division es ", Division);
//5. `Modulo (%)`:  Saca el modulo entre numero2 y numero1. Muestra el resultado por consola.
let Modulo = numero1 % numero2;
console.log("El resultado del modulo es", Modulo);

//Operadores de asignación y comparación

console.log("3.OPERADORES DE ASIGNACION Y COMPARACIÓN");

const numeroA = 15;
const numeroB = 20;
const numeroC = "25";

//1. Muestre por consola si el numeroA es mayor o igual que numeroB.

if (numeroA > numeroB) {
    console.log("El numeroA(1) es mayor que numeroB(2)");
}

if (numeroA == numeroB) {
    console.log("El numeroA(1) es igual que numeroB(2)");
} else {
    console.log("NumeroA(1) no es mayor o igual que el numeroB(2)");
}

//3. Muestre por consola si el numero1 es menor que numero3.

if (numeroA < Number(numeroC)) {
    console.log("El numeroA(1) es menor que numeroC(3)");
} else {
    console.log("NumeroA(1) no es menor que el numeroC(3)");
}

//4. Muestre por consola si el numero3 es menor que numero2.

if (Number(numeroC) < numero2) {
    console.log("El numeroC(3) es menor que el numeroB(2)");
}

//5. Muestre por consola si el numero3 es estrictamente diferente que numero1.

if (Number(numeroC) !== numeroA) {
    console.log("el numero3(C) es estrictamente diferente", numeroC);
} else {
    console.log("No es estrictamente diferente");
}

//6. Muestre por consola si el numero1 es estrictamente igual al numero2.

if (numeroA === numeroB) {
    console.log("el numeroA(1) es estrictamente igual que el numeroB(2)");
} else {
    console.log("El numeroA(1) no es escrictamente igual al numeroB(2)");
}

//Condicionales

console.log("4.CONDICIONALES");

const numero_1 = 10;
const numero_2 = 20;
const numero_3 = 30;

//1.Imprimir en consola el número mayor de los tres.
let mayor = 0;

if (numero_1 > numero_2) {
    mayor = numero_1;
} else {
    mayor = numero_2;
}

if (mayor > numero_3) {
    mayor = mayor;
} else {
    mayor = numero_3;
}

console.log("El numero mayor es:", mayor);

//2.Imprimir en consola el número menor de los tres.

let menor = 0;

if (numero_1 < numero_2) {
    menor = numero_1;
} else {
    menor = numero_2;
}

if (menor > numero_3) {
    menor = numero_3;
}

console.log("El numero menor es:", menor);

//3.Imprimir en consola si el numero1 es par o impar.

if (numero_1 % 2 === 0) {
    console.log("El numero1", numero_1, "es par");
} else {
    console.log("le numero1", numero_1, "es impar");
}

//4.Imprimir en consola si el numero2 es par o impar.

if (numero_2 % 2 === 0) {
    console.log("El numero2", numero_2, "es par");
} else {
    console.log("El numero2", numero_2, "es imoar");
}

//5.Imprimir en consola si el numero3 es par o impar.

if (numero_3 % 2 === 0) {
    console.log("El numero3", numero_3, "es par");
} else {
    console.log("El numero3", numero_3, "es imoar");
}

//6.Imprimir en consola si el numero1 es múltiplo de 5.

if (numero_1 % 5 === 0) {
    console.log("El numero1", numero_1, "Es un multiplo de 5");
} else {
    console.log("El numero1", numero_1, "No es multiplo de 5");
}

//7.Imprimir en consola si el numero2 es múltiplo de 5.

if (numero_2 % 5 === 0) {
    console.log("El numero2", numero_2, "Es un multiplo de 5");
} else {
    console.log("El numero1", numero_2, "No es multiplo de 5");
}

//8.Imprimir en consola si el numero3 es múltiplo de 5.

if (numero_3 % 5 === 0) {
    console.log("El numero3", numero_3, "Es un multiplo de 5");
} else {
    console.log("El numero3", numero_3, "No es multiplo de 5");
}

//CICLOS//

console.log("5. CICLOS");

//1. Imprimir en consola los números del 1 al 10.
console.log("numeros del 1 al 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Imprimir en consola los números del 10 al 1.
console.log("numeros del 10 al 1");
for (let i = 10; i > 0; i--) {
    console.log(i);
}
//3. Imprimir en consola los números del 1 al 10 pero solo los pares.

console.log("numeros del 1 al 10 solo pares");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//4. Imprimir en consola los números del 1 al 10 pero solo los impares.

console.log("numeros del 1 al 10 solo impares");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
console.log("numeros del 1 al 10 solo multiplos de 3");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
console.log("numeros del 1 al 10 solo multiplos de 5");
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
console.log("numeros del 1 al 10 solo multiplos de 3 y 5");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
//8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.

console.log("numeros del 1 al 10 solo multiplos de 3 o  5");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

//FUNCIONES

console.log("6. FUNCIONES");

//1. Crea una función que reciba un string y retorne el string en mayúsculas.

function mayusC(tralalero) {
    return tralalero.toUpperCase();
}
console.log(mayusC("tralalero"));

//2. Crea una función que reciba un string y retorne el string en minúsculas.

function minusC(TRALALA) {
    return TRALALA.toLowerCase();
}
console.log(minusC("TRALALA"));
//3. Crear una función que reciba como parámetro 2 números y los reste.

const a = 100;
const b = 30;

function funcionResta(a, b) {
    return a - b;
}

const resultadoResta = funcionResta(a, b);
console.log(resultadoResta);

//4. Crear una función que reciba como parámetro 2 números y los divida.

const c = 200;
const d = 2;

function funcionDiv(c, d) {
    return c / d;
}

const resultadoDiv = funcionDiv(c, d);
console.log(resultadoDiv);
//5. Crear una función que reciba como parámetro 2 números y los multiplique.

const e = 50;
const f = 4;

function funcionMul(e, f) {
    return e * f;
}

const resultadoMul = funcionMul(e, f);
console.log(resultadoMul);
//6. Crear una función que reciba un string y devuelva la longitud del string.

let miNombre = "catherine";

function longString(miNombre) {
    return miNombre.length;
}

const resultadoLong = longString(miNombre);
console.log("la longitud del string es ", resultadoLong);


//ARAYS

console.log("7.ARRAYS");

//1. Crea una función que reciba como parámetro un array de números y 
// retorne la suma de todos los números del array.

const numeros1 = [1, 2, 3, 4, 5]

function arrSuma (numeros1){
    let result = 0;
    numeros1.forEach(numero=>{
        result += numero;
    });

    return result;
}

console.log("El resultado de la suma de todos los numeros del array es", (arrSuma(numeros1)));



//2. Crea una función ( o varias) que reciba como parámetro un array de 
// números y retorne el promedio de todos los números del array.

const numeros2 = [3, 4, 5, 8, 10]

function arrSuma2 (numeros2){
    let suma2 = 0;
    numeros2.forEach(numero=>{
        suma2 += numero;
    });

    return suma2;
}

function arrLargo(numeros2){
    return numeros2.length;
}

function arrProm (numeros2){
    const suma2 = arrSuma2(numeros2);
    const largo = arrLargo(numeros2);
    return suma2/largo;
}


console.log("El promedio del array es:",arrProm(numeros2));

//3. Crea una función que tome un arreglo de strings como parámetro 
// y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.

let arrayLetras = ['a','b','c','d','e','f'];

function LetrasMayus (arrayLetras) {

    return arrayLetras.map(letra=>letra.toUpperCase());
}

const mayusculas = LetrasMayus(arrayLetras);
console.log(mayusculas);

//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.

const numeroParametro = [1,2,3,4,5,6,7,8,9,10];

function parametroPar (numeroParametro){

    return numeroParametro.filter(numero=>numero%2===0);

}

const arrayPares = parametroPar(numeroParametro);

console.log(arrayPares);


//OBJETOS

console.log("8.OBJETOS");

//1. Crear un objeto de persona: Define un objeto llamado "persona" 
// que tenga propiedades como nombre, edad y género. Luego, muestra 
// la información de esa persona por la consola

const persona = {
    nombre : "Floricienta",
    edad: 20,
    genero : "Femenino"
}

console.log(persona);

//2.Crear un objeto llamado caja: La caja se compone de cuadernos, 
// lápices, papel, fotografías y indica el estado si esta en buen 
// estado o no. Imprimir el objeto entero por consola, imprimir cada
//  propiedad del objeto y el tipo de dato que es.

const caja = {
    cuadernos: 12,
    lapices: 54,
    papel:100,
    fotografias:900,
    buenEstado: true

}

console.log(caja);
console.log(caja.cuadernos);
console.log(caja.lapices);
console.log(caja.papel);
console.log(caja.fotografias);
console.log(caja.buenEstado);
console.log(typeof caja);
console.log(typeof caja.cuadernos);
console.log(typeof caja.lapices);
console.log(typeof caja.papel);
console.log(typeof caja.fotografias);
console.log(typeof caja.buenEstado);