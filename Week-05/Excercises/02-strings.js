console.log("--EXERCISE 2 STRINGS--");

/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

console.log("-Excercise 2.a");

var upperString = "This string is going to be used for uppercase";

console.log(upperString.toUpperCase())

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log("-Exercises 2.b");

var sub1 = "Javascript is fun";
var sub2 = sub1.substring(0, 5);

console.log (sub2);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log("-Exercise 2.c");

var string = "Javascript is pretty cool";
var result = string.substring(string.length-3);

console.log (result);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/

console.log("-Exercise 2.d");

var stringA = "javascript is complicated sometimes";
var stringB = stringA.substring(0, 1).toUpperCase();
var stringC = stringA.substring(1).toLowerCase();
var stringD = stringB + stringC;

console.log (stringD)

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log("-Exercise 2.e");

var stringA = "Javascript is lot harder and I'm not liking this";
var b = stringA.indexOf(" ");

console.log(b);

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y 
el operador +).*/

console.log("-Exercise 2.f");

var stringsA = "juxtaposition complicated";
var b = stringsA.substring(0, 1).toUpperCase();
var c = stringsA.indexOf(" ");
var d = stringsA.substring(c + 1, c + 2).toUpperCase();
var e = stringsA.substring(1, c).toLowerCase();
var f = stringsA.substring(c+2).toLowerCase();
var g = b + e + " " + d + f;

console.log(g);


