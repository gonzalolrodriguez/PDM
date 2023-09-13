function calcularSuma() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');

    if (!isNaN(numero)) {
        const numeroComoTexto = numero.toString();
        let suma = 0;

        for (let i = 0; i < numeroComoTexto.length; i++) {
            const digito = parseInt(numeroComoTexto[i]);
            if (!isNaN(digito) && digito % 2 === 0) {
                suma += digito;
            }
        }

        resultadoDiv.textContent = `Número ingresado: ${numero}`;
        resultadoDiv.innerHTML += `<br>Suma de dígitos pares: ${suma}`;
    } else {
        resultadoDiv.textContent = 'Por favor, ingrese un número válido.';
    }
}