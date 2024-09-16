// Solicita al usuario que ingrese su edad
let edad = parseInt(prompt("Introduce tu edad:"));

// Verifica que el valor ingresado sea un número válido
if (isNaN(edad)) {
    console.error("Por favor, introduce una edad válida.");
} else {
    // Determina la categoría de edad y muestra el resultado
    if (edad < 13) {
        console.log("Es un niño.");
    } else if (edad >= 13 && edad <= 17) {
        console.log("Es un adolescente.");
    } else if (edad >= 18 && edad <= 110) {
        console.log("Es un adulto.");
    } else {
        console.log("No es una edad válida.");
    }
}
