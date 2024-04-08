// Solicitar al usuario un número
const numero = parseInt(prompt("Ingresa un número:"));

// Verificar si el usuario ingresó un número válido
if (!isNaN(numero)) {
  // Crear la tabla
  document.write("<table>");
  document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

  // Generar filas con números, cuadrados y cubos
  for (let i = 1; i <= numero; i++) {
    const cuadrado = i * i;
    const cubo = i * i * i;
    document.write(`<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`);
  }

  document.write("</table>");
} else {
  document.write("Por favor, ingresa un número válido.");
}
