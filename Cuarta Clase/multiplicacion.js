function generarTabla() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar contenido anterior

    if (!isNaN(numero)) {
        const tabla = document.createElement('table');
        for (let i = 1; i <= 10; i++) {
            const fila = document.createElement('tr');
            const celdaNumero = document.createElement('td');
            const celdaResultado = document.createElement('td');
            celdaNumero.textContent = `${numero} x ${i}`;
            celdaResultado.textContent = numero * i;
            fila.appendChild(celdaNumero);
            fila.appendChild(celdaResultado);
            tabla.appendChild(fila);
        }
        resultadoDiv.appendChild(tabla);
    } else {
        resultadoDiv.textContent = 'Por favor, ingrese un número válido.';
    }
}