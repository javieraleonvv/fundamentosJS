console.log



// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "javiera";
    alert(`bievenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let number1 = "10"
    let number2 = "5"
    alert(`la suma de ${number1}y ${number2} es:${number1 + number2}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let num1 = 15;
    let num2 = 3;
    alert(`la resta de ${num1} y ${num2} es: ${num1 + num2}`);

}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let numero1 = 2;
    let numero2 = 12;
    alert(`la multiplicacion de ${numero1} y ${numero2} es: ${numero1 * numero2}`);
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let nota1 = 6.0;
    let nota2 = 5.5;
    let nota3 = 5.7;
    let promedio = (nota1 + nota2 * nota3)
    alert(`el promedio es ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 18;
    if (edad >= 17) alert(`eres mayor de edad`)
    else (`alert{eres menor de edad}`)
};


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let resto = 14;
    if (resto % 2 == 0) { alert(`el numero 14 es par`) }
    else { alert(`el numero 14 es impar`) };
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let universidad = 6.5
    if (universidades == 7.0) { alert(`estudiante aprobado con puntaje perfecto`) }
    else if (universidad >= 4.0) { alert(`estudiante aprobado`) }
    else { alert(`estudiante reprobado`) };
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let producto = 2e4;
    let descuento = 2e4 * 0.1;
    alert(`el precio final es: ${producto - descuento}`);
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let n1 = 22;
    let n2 = 4;
    if (n1 > n2) { alert(`el numero mayor es: ${n1}`) }
    else { (`el numero es menor es: ${n2}`) };

}
// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 6.5;
    if (nota >= 6.0) {
        alert(`el estudiante juan tiene nota ${nota} y su resultado es:
            exelente rendimiento`);
    } else if (nota >= 4.0) {
        alert(`el estudiante juan tiene nota ${nota} y su resultado es:
            desaprobado`);
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre = "daniel"
    let apellido = "perez"
    let nombreco = nombre + apellido;
    alert(`el nombre convertido es: ${nombre} ${apellido} y tiene ${nombrecom.length}
        caracteres`)

}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "mona@gmail.com"
    if (correo.length >= 15) { alert(`el correo convertido es ${correo.toLowerCase()} y el resultado es: correo valido`) }
    else { alert(`el correo convertido ${corrreo.toLowerCase()} y el resultado es: correo valido`) };
}



// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let js = "estoy aprendiendo JavaScript";
    if (js.length >= 11) { alert(`la frase "${js.toUpperCase()}" tiene ${js.length} caracteres y corresponde a una frase mediana`) }
    else { alert(`la frase "${js.toUpperCase()}" tiene ${js.lentgh} caracteres y cprresponde a una frase corta`) };
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let price = 50000;
    let ganga = price * 0.20;
    let ganga2 = price * 0.10;
    if (price >= 50000) {alert(`El producto ${"teclado".toUpperCase()} tiene un precio final de:${price -  ganga}`) }
    else if (price >= 20000) {alert(`el producto ${"teclado" .toUpperCase()} tiene un precio final de: ${price - ganga2} `)}
    else {alert(`el producto ${"teclado" .toUpperCase()} tiene un precio final de: ${price}`)};
}

//Ejercicio 16: Boleta de compra con clasificación de cliente

//Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
//Convertir el nombre del cliente a mayúsculas
//Determinar el tipo de cliente según el precio:
//Mayor o igual a 100.000 → Cliente Premium (20% descuento)
//Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
//Menor a 50.000 → Cliente Normal (sin descuento)

function ejercicio16() {
    let precio = 100000;
    let discount = precio * 0.20;
    let discount2 = precio * 0.10;
    if (precio >= 50000) {alert (`el producto ${"teclado" .toUpperCase()} tiene un precio de: ${precio} pero con descuento, el final seria de,aplicando el descuento`)}
    else if (precio >= 50000) {alert(`el producto ${"teclado" .toUpperCase()} tiene un precio de: ${precio} pero con descuento, el precio final seria de, aplicando descuento`)}
    else { alert(`el producto ${"teclado" .toUpperCase()} tiene un precio de: ${precio}`) };
};

//Ejercicio 17: Análisis de frase con puntuación
//Crear una función que almacene una frase y un puntaje numérico. Luego:
//Convertir la frase a minúsculas
//Contar la cantidad de caracteres
//Clasificar el puntaje:
//90 o más → Excelente
//70 o más → Bueno
//Menor a 70 → Insuficiente
    function ejercicio17() {
    let frase = "las llamadas en discord son lo mas terapeutico que he tenido en lo que lleva de año.";
    if (frase.length >=90) {alert(`la frase "${frase.toLocaleLowerCase()}" tiene ${frase.length} caracteres y su puntuacion es: Excelente`) }
    else if (frase.length >=70) {alert(`la frase "${frase.toLowerCase()}" tiene ${frase.length} caracteres y su puntuacion es: bueno`) }
    else {alert(`la frase "${frase.toLocaleLowerCase()}" tiene ${frase.length} caracteres y su puntuacion es: insuficiente`) };

    };


//Ejercicio 18: Evaluación de tres notas con estado final

//Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

//Calcular el promedio
//Convertir el nombre a mayúsculas
//Determinar el estado:
//Promedio ≥ 6.0 → Destacado
//Promedio ≥ 4.0 → Aprobado
//Promedio < 4.0 → Reprobado




//Ejercicio 19: Clasificación de desempeño con más niveles
//Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

//Convertir el nombre a mayúsculas
//Clasificar el rendimiento según:
//≥ 6.5 → Sobresaliente
//≥ 6.0 → Muy buen rendimiento
//≥ 5.0 → Buen rendimiento
//≥ 4.0 → Suficiente
//< 4.0 → Insuficiente

//Además:

//Mostrar la cantidad de caracteres del nombre

//Ejercicio 20: Clasificación de producto con múltiples rangos de precio
//Crear una función que almacene el nombre de un producto y su precio. Luego:

//Convertir el producto a minúsculas
//Clasificar el precio:
//≥ 200.000 → Producto de lujo
//≥ 100.000 → Producto premium
//≥ 50.000 → Producto estándar
//≥ 20.000 → Producto económico
//< 20.000 → Producto básico

//Además:

//Aplicar descuento:
//Si es ≥ 100.000 → 15%
//Si es ≥ 50.000 → 10%
//Si es menor → sin descuento

//Mostrar:

//Nombre transformado
//Largo del nombre del producto
//Precio original
//Precio final
//Clasificación

//Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
//Crear una función que almacene una frase y un puntaje. Luego:

//Convertir la frase a mayúsculas
//Contar su largo
//Clasificar el puntaje:
//≥ 90 → Excelente
//≥ 80 → Muy bueno
//≥ 70 → Bueno
//≥ 60 → Regular
//< 60 → Deficiente

//Además:

//Clasificar la frase por tamaño:
//30 → Muy larga
//20 → Larga
//10 → Mediana
//≤ 10 → Corta