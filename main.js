let prestamos = JSON.parse(localStorage.getItem('prestamos')) || [];

function calcularPrestamo(monto, tasa, plazo) {
    let cuota = monto * (tasa / 1200) / (1 - (1 + tasa / 1200) ** (-plazo));
    return cuota;
}

function imprimirHistorial() {
    const historialTextArea = document.getElementById('historial');
    historialTextArea.value = '';
    prestamos.forEach((prestamo, index) => {
        historialTextArea.value += `Préstamo ${index + 1}:\n`;
        historialTextArea.value += `Monto: $${prestamo.monto}\n`;
        historialTextArea.value += `Tasa de Interés: ${prestamo.tasa}%\n`;
        historialTextArea.value += `Plazo: ${prestamo.plazo} meses\n`;
        historialTextArea.value += `Cuota Mensual: $${prestamo.cuota}\n\n`;
    });
}

const montoInput = document.getElementById('monto');
const tasaInput = document.getElementById('tasa');
const plazoInput = document.getElementById('plazo');
const calcularButton = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

calcularButton.addEventListener('click', () => {
    let monto = parseFloat(montoInput.value);
    let tasa = parseFloat(tasaInput.value);
    let plazo = parseInt(plazoInput.value);

    if (monto > 0 && tasa > 0 && plazo > 0) {
        let cuota = calcularPrestamo(monto, tasa, plazo);
        resultadoDiv.textContent = "La cuota mensual es de $" + cuota.toFixed(2);

        const prestamo = {
            monto: monto,
            tasa: tasa,
            plazo: plazo,
            cuota: cuota.toFixed(2)
        };

        prestamos.push(prestamo);
        localStorage.setItem('prestamos', JSON.stringify(prestamos));
        imprimirHistorial();
    } else {
        resultadoDiv.textContent = "Por favor ingrese valores válidos";
    }
});

imprimirHistorial();

const borrarButton = document.getElementById('borrar');

borrarButton.addEventListener('click', () => {
    prestamos = [];
    localStorage.removeItem('prestamos');
    imprimirHistorial();
});
