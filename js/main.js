/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A"

PSEUDOCÓDIGO

INICIO
Declaro función con parámetro "nombre"
Return resultado:
    mayúsculas
    divide la palabra por caracteres
    separadas letras con espacio
Llamamos a la función
FIN */


function nombreCambiado(nombre) {
    return (nombre.toUpperCase().split("").join(" "))
};
console.log(nombreCambiado("aintzane"));
console.log(nombreCambiado("haizea"));
console.log(nombreCambiado("maritxu"));

/* 
Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

PSEUDOCÓDIGO

INICIO
Declaro función con X como parámetro
Return resultado
    dividir por bloques(elementos)
    contar palabras
    devolver cuantas palabras tiene 
Llamar a la función
FIN
*/

function contarPalabras (name) {
    return ( name.split(" ").length)
};
console.log(contarPalabras("Aintzane Chávarri Díaz de Alda"));
console.log(contarPalabras("Haizea Gracia Chávarri"));


/*
Ejercicio 3:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.


PSEUDOCÓDIGO

INICIO
Declara funcion con 2 parametros
Frase y letra a buscar
Acumulador 
for of (caracter de frase)
if es igual
sumamos vueltas
devolvemos resultado
llamamos a la función
FIN

*/

_/* function contarLetra (frase, letra) {
    let acumulador = 0;
    for (let caracter of frase) { 
        if (caracter === letra) {
            acumulador++
        };
    };
    return acumulador; //return que pertenece a la funcion, ojo donde ponerlo
};

console.log(contarLetra("Esto es una frase de prueba", "a"));
console.log(contarLetra("El pequeño murciélago que volaba en Zimbabwe se estrelló contra un berenjenal", "b")) */