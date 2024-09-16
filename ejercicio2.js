const prompt = require('prompt-sync')();
let numero1 = prompt("Ingresa el primer número: ");

let numero2 = prompt("Ingresa el segundo número: ");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let suma = numero1 + numero2;

console.log("La suma de los dos números es: " + suma);