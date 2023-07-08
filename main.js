
function calcularPrestamo(monto, tasa, plazo) {
    let cuota = monto * (tasa / 1200) / (1 - (1 + tasa / 1200) ** (-plazo));
    return cuota;
}

let continuar = true;

do {
    let monto = prompt("Ingrese el monto del préstamo");
    let tasa = prompt("Ingrese la tasa de interés anual en porcentaje");
    let plazo = prompt("Ingrese el plazo del préstamo en meses");

    if (monto > 0 && tasa > 0 && plazo > 0) {
        let cuota = calcularPrestamo(monto, tasa, plazo);
        alert("La cuota mensual es de " + cuota.toFixed(2));
    } else {
        alert("Por favor ingrese valores válidos");
    }

    continuar = confirm("¿Quiere realizar otro cálculo?");
} while (continuar);



