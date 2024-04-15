document.addEventListener('DOMContentLoaded', function() {
    const polloInput = document.getElementById('pollo');
    const carneInput = document.getElementById('carne');
    const pescadoInput = document.getElementById('pescado');
    
    const totalPollo = document.getElementById('totalPollo');
    const totalCarne = document.getElementById('totalCarne');
    const totalPescado = document.getElementById('totalPescado');

    const subtotal = document.getElementById('subtotal');
    const ivaElement = document.getElementById('iva');
    const totalFinal = document.getElementById('totalFinal');

    const precioPollo = 10;
    const precioCarne = 15;
    const precioPescado = 20;
    const iva = 0.16;

    function calcularTotales() {
        // Calcular el total para el pollo
        const cantidadPollo = parseFloat(polloInput.value) || 0;
        const totalPolloCalculado = cantidadPollo * precioPollo;
        totalPollo.textContent = `$${totalPolloCalculado.toFixed(2)}`;

        // Calcular el total para la carne
        const cantidadCarne = parseFloat(carneInput.value) || 0;
        const totalCarneCalculado = cantidadCarne * precioCarne;
        totalCarne.textContent = `$${totalCarneCalculado.toFixed(2)}`;

        // Calcular el total para el pescado
        const cantidadPescado = parseFloat(pescadoInput.value) || 0;
        const totalPescadoCalculado = cantidadPescado * precioPescado;
        totalPescado.textContent = `$${totalPescadoCalculado.toFixed(2)}`;

        // Calcular subtotal
        const subtotalCalculado = totalPolloCalculado + totalCarneCalculado + totalPescadoCalculado;
        subtotal.textContent = `$${subtotalCalculado.toFixed(2)}`;

        // Calcular IVA
        const ivaCalculado = subtotalCalculado * iva;
        ivaElement.textContent = `$${ivaCalculado.toFixed(2)}`;

        // Calcular total final
        const totalFinalCalculado = subtotalCalculado + ivaCalculado;
        totalFinal.textContent = `$${totalFinalCalculado.toFixed(2)}`;
    }

    // Escuchar cambios en las cantidades y calcular totales
    polloInput.addEventListener('input', calcularTotales);
    carneInput.addEventListener('input', calcularTotales);
    pescadoInput.addEventListener('input', calcularTotales);

    // Calcular totales iniciales
    calcularTotales();
});
