// Solicita al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));

// Verifica que los valores ingresados sean números válidos
if (isNaN(numero1) || isNaN(numero2)) {
    console.error("Por favor, introduce valores numéricos válidos.");
} else {
    // Compara los dos números y muestra cuál es el mayor
    if (numero1 > numero2) {
        console.log(`El número mayor es: ${numero1}`);
    } else if (numero2 > numero1) {
        console.log(`El número mayor es: ${numero2}`);
    } else {
        console.log("Ambos números son iguales.");
    }
}
