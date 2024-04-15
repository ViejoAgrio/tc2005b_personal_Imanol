function fibonacciHastaN(n) {
    if (n <= 0) {
      return "Por favor, ingresa un entero positivo mayor que cero.";
    }
  
    const fibonacci = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const siguienteTermino = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(siguienteTermino);
    }
  
    return `La serie de Fibonacci hasta el ${n}-ésimo término es: ${fibonacci.join(", ")}`;
  }
  
  const nEjemplo = 10;
  console.log(fibonacciHastaN(nEjemplo));
  