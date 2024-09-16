// Función para convertir Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Solicita al usuario que ingrese la temperatura en Fahrenheit
let fahrenheitTemperature = prompt("Introduce la temperatura en grados Fahrenheit:");

// Convierte el valor de la entrada a un número
fahrenheitTemperature = parseFloat(fahrenheitTemperature);

// Verifica que la entrada sea un número válido
if (isNaN(fahrenheitTemperature)) {
    console.error("Por favor, introduce un número válido.");
} else {
    // Convierte la temperatura a Celsius
    let celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
    
    // Muestra el resultado en la consola
    console.log(`La temperatura en grados Celsius es: ${celsiusTemperature.toFixed(2)}`);
