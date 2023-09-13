function compararNumeros() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").innerText =
            "Ingrese dos números válidos.";
    } else if (numero1 > numero2) {
        document.getElementById(
            "resultado"
        ).innerText = `${numero1} es mayor que ${numero2}.`;
    } else if (numero2 > numero1) {
        document.getElementById(
            "resultado"
        ).innerText = `${numero2} es mayor que ${numero1}.`;
    } else {
        document.getElementById("resultado").innerText =
            "Ambos números son iguales.";
    }
}