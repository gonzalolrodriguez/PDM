function calcularCategoriaEdad() {
    const edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad <= 0 || edad !== Math.floor(edad)) {
        alert("Por favor, ingrese una edad válida (número entero positivo).");
        return;
    }

    let categoria = "";

    if (edad <= 12) {
        categoria = "Niño";
    } else if (edad <= 19) {
        categoria = "Adolescente";
    } else if (edad <= 64) {
        categoria = "Adulto";
    } else {
        categoria = "Adulto Mayor";
    }

    document.getElementById("resultado").innerText = `Categoría de Edad: ${categoria}`;
}
