function calcularResultado() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;

    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById(
        "resultado"
    ).innerText = `Resultado: ${resultado}`;
}