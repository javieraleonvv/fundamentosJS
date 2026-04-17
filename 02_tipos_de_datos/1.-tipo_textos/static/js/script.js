console.log("conexion con js correcta...");
/*
dato: tipo texto(string)
concatenacion de texto con el signo +
podemos unir texto y variables
*/
// Concatenacíon de textos con el signo + podemos unir texto y variables
const nombre = "Javiera";
const apellido = "leon"
//Unimos ambas constantes con un texto extra.
console.log("hola, mi nombre es: " + nombre + " " + apellido);

/*
2- ver el tipo de dato (typeof)
*/
console.log("la variable nombre es un tipo de dato:" + typeof nombre);

// template literals (forma moderna de concaternar) ``
console.log(`hola, mi nombre es ${nombre} ${apellido}`);

//Mostrar rl largo de un string(texto) - contar los caracteres-
// .legth --> para contar caracteres y espacios
let palabra = "paralelepipedo";
console.log(`la palabra ${palabra} tiene ${palabra.length} letras`);

// crear una frase y contar su caracteres.
let frase = "panconqueso";
console.log(`la frase ${frase} tiene ${frase.length} letras.`);

// Metodos comunes en JS para formatear texto
//Transformar texto en mayuscula toUperCase()
let texto1 ="JavAScRipT Es Lo MeJOr"
console.log(texto1.toUperCase ());
//transformar texto a minusculas .toLoweCase()
console.log(texto1.toLowerCase());

//buscar un texto detro de un string .incluides()
let texto2 = "leche, azucar, peras, huevos, harina";
console.log(texto2.incluides ("peras")); //true

//convertir una variable a texto String()
let telefono= 89182920;
let telefono_texto = String(telefono);
console.log(`mi numero de telefono ${telefono_texto}
    es de tipo ${typeof telefono_texto}`);