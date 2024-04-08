// Generar dos números aleatorios entre 1 y 10
const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;

// Calcular la suma correcta
const sumaCorrecta = num1 + num2;

// Solicitar al usuario la respuesta
const tiempoInicio = Date.now();
const respuestaUsuario = parseInt(prompt(`¿Cuánto es ${num1} + ${num2}?`));
const tiempoFinal = Date.now();
const tiempoTotal = (tiempoFinal - tiempoInicio) / 1000; // Convertir a segundos

// Verificar si la respuesta es correcta
if (!isNaN(respuestaUsuario) && respuestaUsuario === sumaCorrecta) {
  document.write(`<p>¡Respuesta correcta! Tiempo: ${tiempoTotal} segundos.</p>`);
} else {
  document.write(`<p>Respuesta incorrecta. La suma era ${sumaCorrecta}. Tiempo: ${tiempoTotal} segundos.</p>`);
}
