const DOMPREPAY = {
    transfer: document.getElementById("transfer"),
    btn_transfer: document.getElementById("btn-transfer"),
    payment: document.getElementById("payment"),
    next: document.getElementById("next"),
    total: document.getElementById("total")
}

function showTransfer(how) // Este Método Se Llama Cuando el Cliente Presiona El Botón Transferencia Bancaria o Pago por PayPal, Recibe el Texto Apropiado Según el Botón Pulsado.
{
    DOMPREPAY.transfer.style.display = "block"; // Muestra el Contenedor con los Datos Para la Transferencia.
    DOMPREPAY.btn_transfer.style.display = "none"; // Oculta el Botón Transferencia Bancaria.
    DOMPREPAY.payment.value = how; // Asigna a la Forma de Pago el Texto Recibido por Parametro.

    DOMPREPAY.next.style.visibility = "visible"; // Hace Visible el Botón Siguiente, Doy por Hecho que el Cliente ha Realizado la Transferencia o el Pago por PayPal.
}

function storePayment() // Almaceno en localStorage el Método de Pago.
{
    let payment = DOMPREPAY.payment.value;
    localStorage.setItem("payment", JSON.stringify(payment));
    window.open('../summary/index.html', '_self');
}

function showTotal() // Llamo a Este Método Para Mostrar el Total a Pagar con el Impuesto ya Agregado y el Descuento Aplicado en Caso que Corresponda.
{
    let total = getTotal(); // Asigna a la Variable total la llamada al Método getTotal() que Obtiene el total a Pagar.

    DOMPREPAY.total.innerHTML = total; // Muestra el Total a Pagar en Pantalla.
}

function getTotal() // El Pago por PayPal Llama a Este Método Para Saber Cuanto Hay que Pagar en PayPal.
{
    let total = localStorage.getItem("total");
    return total;
}

function noSend(event)
{
    event.preventDefault();
}