console.log("--EXERCISE 1 VARIABLES AND OPERATORS--");

/*a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números 
en una 3er variable.*/

console.log("-Exercise 1.a");

var a = 1;
var b = 2;
var result = a + b;

console.log (result);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log("-Exercise 1.b");

var firstPart = "This is ";
var secondPart = " a full sentence in english";
var result = firstPart+secondPart;

console.log(result);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando 
el resultado de la suma en una 3er variable (utilizar length). */

console.log("-Exercise 1.c");

var string1 = "This is a string to count";
var string2 = "and this too";
var result = string1.length + string2.length;

console.log(result);
