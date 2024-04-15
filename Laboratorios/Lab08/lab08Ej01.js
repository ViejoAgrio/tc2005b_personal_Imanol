function calcularPromedio(arregloNumeros) {
    if (arregloNumeros.length === 0) {
      return "El arreglo está vacío. No se puede calcular el promedio.";
    }
  
    const sumaTotal = arregloNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const promedio = sumaTotal / arregloNumeros.length;
  
    return `El promedio de los números en el arreglo es: **${promedio.toFixed(2)}**`;
  }
  
  const numerosEjemplo = [10, 20, 30, 40, 50];
  console.log(calcularPromedio(numerosEjemplo));
  