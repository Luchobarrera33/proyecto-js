const prestamos = [];

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

let continuar = true;

do {
    let monto = parseFloat(prompt("Ingrese el monto del préstamo"));
    let tasa = parseFloat(prompt("Ingrese la tasa de interés anual en porcentaje"));
    let plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses"));

    if (monto > 0 && tasa > 0 && plazo > 0) {
        let cuota = calcularPrestamo(monto, tasa, plazo);
        alert("La cuota mensual es de " + cuota.toFixed(2));

        const prestamo = {
            monto: monto,
            tasa: tasa,
            plazo: plazo,
            cuota: cuota.toFixed(2)
        };

        prestamos.push(prestamo);
    } else {
        alert("Por favor ingrese valores válidos");
    }

    continuar = confirm("¿Quiere realizar otro cálculo?");
} while (continuar);

//imprime historial al cancelar
imprimirHistorial();



