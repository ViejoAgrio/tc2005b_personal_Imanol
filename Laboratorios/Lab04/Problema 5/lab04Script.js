function inverso(numero) {
  // Convertir el número a cadena
  const cadenaNumero = numero.toString();

  // Dividir la cadena en caracteres, invertir el orden y unir nuevamente
  const resultado = cadenaNumero.split("").reverse().join("");

  return resultado;
}

// Solicitar al usuario un número
const numeroUsuario = parseInt(prompt("Ingresa un número:"));

// Calcular el inverso
const resultadoInverso = inverso(numeroUsuario);

// Mostrar el resultado
document.write(`<p>El inverso de ${numeroUsuario} es ${resultadoInverso}</p>`);
