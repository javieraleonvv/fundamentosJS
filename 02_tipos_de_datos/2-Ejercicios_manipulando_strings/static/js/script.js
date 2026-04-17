console.log("conexion correcta con js");

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre ="camila";
let edad= 25;
console.log(`ella es ${nombre} y su edad es ${typeof edad}`);

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna="maipu";
let region= "metropolitana"
console.log(`el vive en ${comuna.toUpperCase()} y es de ${region.toLowerCase()}.`);

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje="Phyton";
console.log(`el leguaje ${lenguaje.toLowerCase()} y tiene ${lenguaje.length} letras.
    /nSu tipo de dato es: ${typeof lenguaje}`);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
    let mensaje ="me encanta progamar en javaScript"
    console.log(` mensaje inicial: "${mensaje}"
    \nMensaje en minusculas:"${mensaje.toLowerCase()}"
    \nBuscando palabra javascriptdentro: ${mensaje.includes("javascript")}
    \nCantidad de caracteres en mensaje: ${mensaje.length}.`);

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
    let compras="arroz, fideos, aceite, sal";
    console.log(`${compras.toUpperCase()} tienen ${compras.length} caracteres\n. encuentra la palabra: ${compras.incluides("aceite")}`);

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
    let numeroCasa= 456;
    let numeroCasaTexto= String(numeroCasa);
    console.log(`mi numero de casa ${numeroCasaTexto} es de tipo: ${typeof numeroCasa} tiene ${numeroCasaTexto.length} letras`);

// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let name = "Diego";
let lastname ="Rojas";
let nombrecompleto = `${name} ${lastname}`
console.log(`el nombre es: ${name} y el apellido es: ${lastname}
    \n el nombre completo es ${nombrecompleto} y tiene ${nombrecompleto.length} caracters` .toUpperCase());

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase="hoy aprenderemos sobre strings";
console.log(`la frase ${frase} contiene la palabra "strings": ${frase.incluides("strings")}`);
console.log(`${frase.toUpperCase()} - tiene ${frase.length} caracteres.`);

// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto="progamar es divertido";
console.log(`texto original ${texto} \ntexto en minuscula: ${texto.toLowerCase()} \ntexto en mayúscula: ${texto.toUpperCase()} \nel texto tiene: ${texto.lentgh} caracteres`);


// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 3C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "3C";
let anio = 2026;
let aniotexto = String(anio); //anop a texto


console.log(`curso ${curso} del año ${aniotexto} \nAño es de tipo: ${typeof aniotexto}` .toUpperCase());