function showCar() // Este Métdo se Llama al Cargar la Página para Mostrar el Contenido del Carro de la Compra.
{
    let container = document.getElementById("car");
    let data = JSON.parse(localStorage.getItem("car")); // Carga los Datos del Carro en localStorage en la Variable data.

    let total = 0;
    let html = "";
    html += "<ul>"
    data.map(function (article) {
        if (article.qtty > 0 && article.check) // Artículos con Cantidad Mayor que 0 y que Tengan el Check Facturar.
        {
            html += "<li>" + article.qtty + " " + article.label + "</li>";
            html += "<li>Precio: " + article.price + " €</li>";
            html += "<li>Total: " + article.qtty + " " + article.label + ": " + article.total + " €</li>";
            total += parseFloat(article.total);
        }
    });
    let igic = total * .07;
    let to_pay = 0;
    if (total >= 30)
    {
        let discount = total * .2;
        to_pay = total - discount;
        html += "<li><strong>Total a Pagar sin I.G.I.C. " + total + " €</strong></li>";
        html += "<li><strong>Total a Pagar sin I.G.I.C. con el Descuento del 20%: " + to_pay + " €</strong></li>";
    }
    else
    {
        html += "<li><strong>Total a Pagar sin I.G.I.C.: " + total + " €</strong></li>";
        to_pay = total;
    }
    html += "<li><strong>Total a Pagar + I.G.I.C. + Transporte: " + localStorage.getItem("total") + " €</strong></li>";
    html +="</ul>";
    container.innerHTML = html;
}

function showData() // Este Métdo se Llama al Cargar la Página para Mostrar los Datos del Cliente.
{
    let container = document.getElementById("data");
    let data = JSON.parse(localStorage.getItem("data"));

    let html = "";
    html += "<ul>"
    data.map(function (dato) {
        html += "<li>Nombre: " + dato.name + " " + dato.surname + " " + dato.surname2 + "</li>";
        html += "<li>DNI: " + dato.dni + "</li>";
        html += "<li>Dirección: " + dato.address + " Código Postal: " + dato.cp + "</li>";
        if (dato.kind == "Particular")
        {
            html += "<li>Entrega: " + dato.shipper + " a " + dato.kind + "</li>";
        }
        else
        {
            html += "<li>Entrega: " + dato.shipper + " a " + dato.kind + " CIF: " + dato.cif +  "</li>";
        }
        html += "<li>Teléfono: " + dato.phone + " E-mail: " + dato.email + "</li>";
        html += "<li>Contacto por WhatsApp: " + dato.whatsapp + "</li>";
    });
    html +="</ul>";
    container.innerHTML = html;
}

function showPayment() // Este Métdo se Llama al Cargar la Página para Mostrar la Forma de Pago.
{
    let container = document.getElementById("payment");

    let html = "";
    html += "<ul>"
    html += "<li>Método de Pago: " + localStorage.getItem("payment") + "</li>";
    html +="</ul>";

    container.innerHTML = html;
}