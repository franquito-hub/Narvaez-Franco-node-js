// Función para verificar si los ángulos forman un triángulo válido
function esTrianguloValido(angulo1, angulo2, angulo3) {
    // Verifica si la suma de los ángulos es exactamente 180 grados
    return (angulo1 + angulo2 + angulo3 === 180);
}

// Solicita al usuario que ingrese los tres ángulos internos del triángulo
let angulo1 = parseFloat(prompt("Introduce el primer ángulo en grados:"));
let angulo2 = parseFloat(prompt("Introduce el segundo ángulo en grados:"));
let angulo3 = parseFloat(prompt("Introduce el tercer ángulo en grados:"));

// Verifica que los valores ingresados sean números válidos
if (isNaN(angulo1) || isNaN(angulo2) || isNaN(angulo3)) {
    console.error("Por favor, introduce valores numéricos válidos para los ángulos.");
} else {
    // Verifica si los ángulos forman un triángulo válido
    if (esTrianguloValido(angulo1, angulo2, angulo3)) {
        console.log("Los ángulos introducidos forman un triángulo válido.");
    } else {
        console.log("Los ángulos introducidos no forman un triángulo válido.");
    }
}
