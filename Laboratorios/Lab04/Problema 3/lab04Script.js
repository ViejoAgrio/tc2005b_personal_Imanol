function generarNumerosAleatorios(cantidad) {
  const numeros = [];
  for (let i = 0; i < cantidad; i++) {
    // Generar un número aleatorio entre -10 y 10
    const numeroAleatorio = Math.floor(Math.random() * 21) - 10;
    numeros.push(numeroAleatorio);
  }
  return numeros;
}

function contarNumeros(numeros) {
  let negativos = 0;
  let ceros = 0;
  let positivos = 0;

  for (const numero of numeros) {
    if (numero < 0) {
      negativos++;
    } else if (numero === 0) {
      ceros++;
    } else {
      positivos++;
    }
  }

  return { negativos, ceros, positivos };
}

// Generar 10 números aleatorios
const cantidadNumeros = 10;
const numerosAleatorios = generarNumerosAleatorios(cantidadNumeros);
arregloImprimible = numerosAleatorios.join(", ")
// Contar los números
const resultados = contarNumeros(numerosAleatorios);

// Mostrar los resultados
document.write(`<p>Arreglo generado aleatoriamente: [${arregloImprimible}]</p>`)
document.write(`<p>Números negativos: ${resultados.negativos}</p>`);
document.write(`<p>Números cero: ${resultados.ceros}</p>`);
document.write(`<p>Números positivos: ${resultados.positivos}</p>`);
