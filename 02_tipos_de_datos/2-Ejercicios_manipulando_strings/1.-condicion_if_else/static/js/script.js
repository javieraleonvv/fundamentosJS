console.log("conexion exitosa con JS")

/*
===========================
¿que es una condición en JS?
==============================
uma condicion nos permite tomar desiciones durante el codigo. 
separando dos caminos el si (if) y el no (else).

etructura basica: (Sintaxis --> reglas del lenguaje de progamación)
if (condicion) {
    ///codigo que se ejecuta si la condicion es verdadera.
} else {
    //codigo que se ejecuta si la condicion es falsa.
}
*/


///ejemplo 1: (numérico)
let edad = 18;

if (edad >= 20) { //condicíon si
    console.log("eres mayor de edad");
}

//ejemplo 2: Dos caminos posibles
let temperatura = 10;

if (temperatura > 20) {
    console.log("hace calor")
    else { //Condición No
        console.log("hace frio")
    }
}

//Ejemplo 3: IF - ELSE IF -ELSE (Multiples condiciones)

let nota = 5.5;

if (nota >= 6.0) { // primera condicion
    console.log("exelente!");
} else if (nota >= 4.0) {//segunda condicion
}
console.log("aprobado, puedes mejorar!");
{ 
    else if //valor si no cumple lo anterior
        console.log("reprobado, estudia mas!")
    }

// ejempñlo 4: Condiciones con STRING
let nombre = "javiera";

//comparacion exacta (===)
if (nombre === "javiera") {
    console.log("hola, + nombre")
    else {
        console.log("tu no eres javiera")
    }
}

/*
OPERADORES DE COMBINACION
>mayor que
<menor que
>=mayor o igual
<=menor o igual
=== estricta igualdad
!==distinto estricto
==igualdad
!==distinto
*/
// ejemplo de distinto
let num = 19;
let num2 = 5
if (num !== num2) {
    console.log(èl numero: ${ num } es distinto que ${ num2 }
} else {
    console.log("son iguales!")
}