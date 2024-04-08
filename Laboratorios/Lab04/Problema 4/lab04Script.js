function generarArregloAleatorio(tamano, min, max) {
  const arreglo = [];
  for (let i = 0; i < tamano; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    arreglo.push(numeroAleatorio);
  }
  return arreglo;
}

function calcularPromedios(arregloDeArreglos) {
  const promedios = [];
  for (const subarreglo of arregloDeArreglos) {
    const suma = subarreglo.reduce((acc, num) => acc + num, 0);
    const promedio = suma / subarreglo.length;
    promedios.push(promedio);
  }
  return promedios;
}

// Crear un arreglo de arreglos con números aleatorios
const tamanoArreglos = 5;
const cantidadNumeros = 10;
const minimo = -10;
const maximo = 10;

const arregloDeArreglos = [];
for (let i = 0; i < tamanoArreglos; i++) {
  const subarreglo = generarArregloAleatorio(cantidadNumeros, minimo, maximo);
  arregloDeArreglos.push(subarreglo);
}

// Calcular los promedios de cada subarreglo
const promedios = calcularPromedios(arregloDeArreglos);

// Mostrar los resultados
document.write("<p>Arreglo de arreglos:</p>");
for(let i = 0; i < tamanoArreglos; i++){
  const arregloLegible = arregloDeArreglos[i].join(", ")
  document.write(`<p>${arregloLegible}</p>`)
}

const arregloLegible = promedios.join(", ")
document.write("<p>Promedios:</p>");
document.write(`<p>${arregloLegible}</p>`);
//document.write("<pre>" + JSON.stringify(promedios, null, 2) + "</pre>");

