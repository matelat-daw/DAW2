const DOM2 = {
    contenedor: document.getElementById("contenedor"),
    to_pay: document.getElementById("to_pay"),
    discount: document.getElementById("discount")
}

const imgs = ["../media/imgs/fresa.webp", "../media/imgs/limon.webp", "../media/imgs/piña.jpg", "../media/imgs/manga.webp"]; // Path a la Imágenes de los Artículos del Carro.

const alts = ["Fresas", "Limones", "Piña Tropical", "Manga"]; // Alt de la Imágenes, requerido para la Accesibilidad.

const items = ["Caja de Fresas x 2 Kg.", "Bolsa de Limones x 2 Kg.", "Piña Tropical Congelada x 500 Gr." , "Manga Congelada x 500 Gr."]; // Nombres de los Artículos.

const prices = [8, 2.5, 3, 2]; // Precios de los Artículos.

function showItems() // Se Llama a Este Método al abrir la Página.
{
    DOM2.to_pay.innerHTML = "15.5"; // Total a Pagar Hardcodeado.
    html = "<fieldset><legend>Tu Compra</legend>";
    for (var i = 0; i < 4; i++)
    {
        html += "<div id='contenedor" + (i + 1) + "' class='inline_grid'><div><img src='" + imgs[i] + "' alt='" + alts[i] + "' class='img'></div><div><div><button id='btn_less" + (i + 1) + "' type='button' class='round' onclick='changeQtty(\"-\", document.getElementById(\"qtty" + (i + 1) + "\"), " + prices[i] + ", document.getElementById(\"total" + (i + 1) + "\"), document.getElementById(\"contenedor" + (i + 1) + "\"), document.getElementById(\"label" + (i + 1) + "\"))'>-</button><input id='qtty" + (i + 1) + "' type='number' value='1' onchange='calculate(this.value, " + prices[i] + ", document.getElementById(\"total" + (i + 1) + "\"), document.getElementById(\"contenedor" + (i + 1) + "\"), document.getElementById(\"label" + (i + 1) + "\"))' required><button id='btn_more" + (i + 1) + "' type='button' class='round' onclick='changeQtty(\"+\", document.getElementById(\"qtty" + (i + 1) + "\"), " + prices[i] + ", document.getElementById(\"total" + (i + 1) + "\"), document.getElementById(\"contenedor" + (i + 1) + "\"), document.getElementById(\"label" + (i + 1) + "\"))'>+</button><label id='label" + (i + 1) + "' for='qtty" + (i + 1) + "'>" + items[i] + "</label></div><br><div><input readonly type='number' id='price" + (i + 1) + "' value='" + prices[i] + "' step='.5'><label for='price" + (i + 1) + "'>Precio</label></div><br><div><input readonly type='number' id='total" + (i + 1) + "' step='.5' value='" + prices[i] + "'><label for='total" + (i + 1) + "'>Total</label></div><br><input id='check" + (i + 1) + "' type='checkbox' onchange='invoice(this, document.getElementById(\"qtty" + (i + 1) + "\"), " + prices[i] + ", document.getElementById(\"total" + (i + 1) + "\"), document.getElementById(\"contenedor" + (i + 1) + "\"), document.getElementById(\"btn_less" + (i + 1) + "\"), document.getElementById(\"btn_more" + (i + 1) + "\"))' checked><label for='check" + (i + 1) + "'>Facturar</label>&nbsp;&nbsp;&nbsp;<input type='button' onclick='quit(document.getElementById(\"qtty" + (i + 1) + "\"), document.getElementById(\"total" + (i + 1) + "\"), document.getElementById(\"contenedor" + (i + 1) + "\"))' value='Eliminar' class='danger'></div></div>";
    }

    html += "<div class='inline_grid'><div><img src='../media/imgs/rare.jpg' alt='Pera con Forma de Buda' class='img'></div><div><input id='art5' type='number' disabled><label id='lart5' for='art5'>Pera con Forma de Buda(Sin Stock)</label><br><br><input id='warnme' type='checkbox' name'warnme'><label> Avísame Cuando esté Disponible</label></div></div></fieldset><div class='next'><input type='submit' value='Siguiente'></div>";

    DOM2.contenedor.innerHTML = html; // Pone en el DOM Todos los Elementos Html que Contiene la Variable html.
}

let totalArray = []; // Array que Contendrá los precios de cada Artículo en el Carro de la Compra.
for (var i = 0; i < prices.length; i++) // Bucle al Tamaño del Array de Precios.
{
    totalArray[i] = prices[i]; // Asigna los Precios al Array totalArray.
}

function changeQtty(data, qtty, price, total, container, label)
{
    switch (data)
    {
        case "-":
            qtty.value--;
            calculate(qtty.value, price, total, container, label);
            break;
        default:
            qtty.value++;
            calculate(qtty.value, price, total, container, label);
    }
}

function calculate(qtty, price, total, contenedor, label) // Se Llama Cada Vez que el Cliente Aumenta o Disminuye la Cantidad de un Articulo en el Carro.
{
    if (qtty == 0) // Si la Cantidad llegó a 0, Quita el Artículo de la Venta.
    {
        contenedor.style.display = "none";
    }
    else if (qtty == 1) // Si la Cantidad es 1.
    {
        switch (label.textContent) // Salta Según el Artículo Cambiado.
        {
            case "Cajas de Fresas x 2 Kg.": // Si el Nombre del Artículo era Cajas de Fresas x 2 Kg.
                label.textContent = "Caja de Fresas x 2 Kg."; // Lo Cambia a Caja de Fesas x 2 Kg.
                break;
            case "Bolsas de Limones x 2 Kg.":
                label.textContent = "Bolsa de Limones x 2 Kg.";
                break;
        }
    }
    else // Si no es 1.
    {
        switch (label.textContent) // Vuelvo a Verificar si hay que Cambiar los Nombres.
        {
            case "Caja de Fresas x 2 Kg.":
                label.textContent = "Cajas de Fresas x 2 Kg.";
                break;
            case "Bolsa de Limones x 2 Kg.":
                label.textContent = "Bolsas de Limones x 2 Kg.";
                break;
        }
    }

    showTotal(qtty, price, total, contenedor); // Lamo al Método showTotal, le Paso los Elementos: Cantidad, Total, Precio y Contenedor.
}

function invoice(article, qtty, price, total, contenedor, btn_less, btn_more)
{
    if (!article.checked)
    {
        qtty.readOnly = true;
        btn_less.disabled = true;
        btn_more.disabled = true;
        showTotal(0, 0, total, contenedor);
    }
    else
    {
        qtty.readOnly = false;
        btn_less.disabled = false;
        btn_more.disabled = false;
        showTotal(qtty.value, price, total, contenedor);
    }
}

function quit(qtty, total, contenedor) // Este Método se llama cuando el Cliente Elimina un Artículo con el Botón Eliminar, recibe los Elementos Cantidad, Total y Contenedor.
{
    qtty.value = 0; // Asigna 0 a la Cantidad del Artículo.
    contenedor.style.display = "none"; // Quita el Artículo del Carro.
    showTotal(0, 0, total, contenedor); // Llama al Método showTotal, le Paso los Elementos: Cantidad que es 0 en este caso, Total, Precio a 0 y Contenedor.
}

function showTotal(qtty, price, total, contenedor) // Este Método se Llama Cuando el Cliente Modifica la Cantidad de un Artículo o Elimina un Artículo del Carro, Recibe el Elemento Cantidad, Total, Precio y Contenedor.
{
    total.value = qtty * price; // Asigna al Input que Contiene el Total de Artículo el Producto de Cantidad por Precio.

    switch (contenedor.id) // Salta, Según el Contenedor Pasado.
    {
        case "contenedor1": // Si es el Contenedor 1.
            totalArray[0] = total.value; // Asigna el Nuevo Valor en Total a la Primera Posición del Array totalArray.
            break;
        case "contenedor2":
            totalArray[1] = total.value;
            break;
        case "contenedor3":
            totalArray[2] = total.value;
            break;
        case "contenedor4":
            totalArray[3] = total.value;
            break;
    }

    getTotal();
}

function getTotal()
{
    let final = 0; // Esta Variable se Usa Para Calcular el Total a Pagar de Todos los Artículos del Carro.
    for (var i = 0; i < totalArray.length; i++) // Bucle al Tamaño del Array de totales.
    {
        final += parseFloat(totalArray[i]); // Se Acumulan en final Todos los Totales.
    }
    if (final >= 30)
    {
        let discount = final * .2;
        final = final - discount;
        DOM2.to_pay.innerHTML = final; // Muestra en el h3 que contiene un strong con ID to_pay el Total a Pagar.
        DOM2.discount.innerHTML = " (Con Descuento del 20%)";
    }
    else
    {
        DOM2.to_pay.innerHTML = final;
        DOM2.discount.innerHTML = "";
    }
}

function storeCar(event) // Este Método se Llama Cuando se Envía el Formulario, recibe el Evento.
{
    event.preventDefault(); // Evita que se Envíe el Formulario.

    const DOMCAR = {
        qtty1: document.getElementById("qtty1"),
        label1: document.getElementById("label1"),
        price1: document.getElementById("price1"),
        total1: document.getElementById("total1"),
        check1: document.getElementById("check1"),
        qtty2: document.getElementById("qtty2"),
        label2: document.getElementById("label2"),
        price2: document.getElementById("price2"),
        total2: document.getElementById("total2"),
        check2: document.getElementById("check2"),
        qtty3: document.getElementById("qtty3"),
        label3: document.getElementById("label3"),
        price3: document.getElementById("price3"),
        total3: document.getElementById("total3"),
        check3: document.getElementById("check3"),
        qtty4: document.getElementById("qtty4"),
        label4: document.getElementById("label4"),
        price4: document.getElementById("price4"),
        total4: document.getElementById("total4"),
        check4: document.getElementById("check4"),
    };

    let qtty1 = DOMCAR.qtty1.value;
    let label1 = DOMCAR.label1.textContent;
    let price1 = DOMCAR.price1.value;
    let total1 = DOMCAR.total1.value;
    let check1 = DOMCAR.check1.checked;
    let qtty2 = DOMCAR.qtty2.value;
    let label2 = DOMCAR.label2.textContent;
    let price2 = DOMCAR.price2.value;
    let total2 = DOMCAR.total2.value;
    let check2 = DOMCAR.check2.checked;
    let qtty3 = DOMCAR.qtty3.value;
    let label3 = DOMCAR.label3.textContent;
    let price3 = DOMCAR.price3.value;
    let total3 = DOMCAR.total3.value;
    let check3 = DOMCAR.check3.checked;
    let qtty4 = DOMCAR.qtty4.value;
    let label4 = DOMCAR.label4.textContent;
    let price4 = DOMCAR.price4.value;
    let total4 = DOMCAR.total4.value;
    let check4 = DOMCAR.check4.checked;

    let result = [{
        qtty: qtty1,
        label: label1,
        price: price1,
        total: total1,
        check: check1
    },
    {
        qtty: qtty2,
        label: label2,
        price: price2,
        total: total2,
        check: check2
    },
    {
        qtty: qtty3,
        label: label3,
        price: price3,
        total: total3,
        check: check3
    },
    {
        qtty: qtty4,
        label: label4,
        price: price4,
        total: total4,
        check: check4
    }];

    let total = 0;
    for (var i = 0; i < totalArray.length; i++)
    {
        if (totalArray[i] != 0)
            total += parseFloat(totalArray[i]); // Hay que Parsear a Float el Contenido del Array.
    }

    if (total > 0)
    {
        let igic = (total * .07).toFixed(2); // Asigno a igic el Impuesto del 7% del Total, hay que redondear a 2 decimales.
        if (total >= 30)
        {
            let discount = total * .2;
            total = total - discount;
        }
        total = parseFloat(total) + parseFloat(igic); // Hay que Parsear a Float Ambos Valores.
        localStorage.setItem("total", total);
        total = 0;
        localStorage.setItem("car", JSON.stringify(result)); // Almaceno en localStorage Todos los Artículos del Carro.
        window.open("../data/index.html", "_self");
    }
    else
    {
        alert("No Has Seleccionado Ningún Artículo. Por Favor Selecciona al Menos un Artículo Para Facturar.");
    }
}