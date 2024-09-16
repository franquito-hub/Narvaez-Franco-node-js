// Función para determinar si un año es bisiesto
function esBisiesto(año) {
    if (año % 4 === 0) {
        if (año % 100 === 0) {
            if (año % 400 === 0) {
                return true; // Divisible por 400
            } else {
                return false; // Divisible por 100 pero no por 400
            }
        } else {
            return true; // Divisible por 4 pero no por 100
        }
    } else {
        return false; // No divisible por 4
    }
}

// Solicita al usuario que ingrese un año
let año = parseInt(prompt("Introduce el año:"));

// Verifica que el valor ingresado sea un número válido
if (isNaN(año)) {
    console.error("Por favor, introduce un valor numérico válido para el año.");
} else {
    // Determina si el año es bisiesto y muestra el resultado
    if (esBisiesto(año)) {
        console.log(`El año ingresado ${año} es bisiesto.`);
    } else {
        console.log(`El año ingresado ${año} no es bisiesto.`);
    }
}
