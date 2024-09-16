const prompt = require('prompt-sync')();

let string1 = prompt("Ingresa el primer string: ");

let string2 = prompt("Ingresa el segundo string: ");
let Iguales = string1 === string2;

let mismaLong = string1.length === string2.length;

console.log("Los strings son iguales: " + Iguales);
console.log("Los strings tienen la misma longitud: " + mismaLong);
