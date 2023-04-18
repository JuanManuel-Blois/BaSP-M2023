console.log("--EXERCISE 6 FUNCTIONS--");

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log("Exercise a")

var functional = function(a, b){
    return a + b;
}

var result = functional(2, 3);

console.log(result)

/* b Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un 
número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor 
NaN como resultado.*/

console.log("Exercise b")

var functional = function(a, b){

    if(typeof a !== "number" || typeof b !== "number"){
        alert("One parameter has an error");
        return NaN;
    }

    return a + b;
} 

var result = functional(2, "text");

// c Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log("Exercise c")

var validateInteger = function(digit){

    if(digit % 1 === 0){
        return true;
    } else{
        return false;
    }
}

var test = validateInteger(34);

console.log(test);

/* d Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que 
valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número 
convertido a entero (redondeado).*/

console.log("Exercise d");

var functionalSecond = function(a, b){

    if(typeof a !== "number" || typeof b !== "number"){
        alert("One parameter has an error");
        return NaN;
    }
    if(!validateInteger(a)){
        alert("error");
        return Math.round(a);
    }
    if(!validateInteger(b)){
        alert("error");
        return Math.round(b);
    }

    return a + b;
} 

var result = functionalSecond(1.8, 3);
console.log(result);

/* e Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando 
que todo siga funcionando igual que en el apartado anterior.*/

console.log("Exercise e");

var functionThird = function(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        alert("One parameter has an error");
        return NaN;
    }
    if(!validateInteger(a)){
        alert("error");
        return Math.round(a);
    }
    if(!validateInteger(b)){
        alert("error");
        return Math.round(b);
    }
    return true
}
 
var functionFourth = function(a, b){
    if(functionThird(a, b) === true){
        return a + b;
    } else{
        return functionThird(a, b);
    }
}

var result = functionFourth (1.8, 3);
console.log(result);