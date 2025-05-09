// Datos de entrada
let precio = 100; // Puedes cambiar este valor
let iva = 19;     // Porcentaje de IVA

// Cálculo del total
let total = precio + (precio * iva / 100);

// Mostrar el resultado
console.log("El precio total a pagar es: $" + total.toFixed(2));
