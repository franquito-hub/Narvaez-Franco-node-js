const prompt = require('prompt-sync')();
let numero = prompt("Ingresa un número: ");
numero = parseFloat(numero);
function DivisiblePor5(num) {
    return num % 5 === 0;
}
let resultado = DivisiblePor5(numero);

console.log("El número " + numero + "es divisible por 5?: " + resultado);
