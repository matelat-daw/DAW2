const DOMDATA = {
    name: document.getElementById("client"),
    surname: document.getElementById("surname"),
    surname2: document.getElementById("surname2"),
    dni: document.getElementById("dni"),
    address: document.getElementById("address"),
    cp: document.getElementById("cp"),
    shipper1: document.getElementById("shipper1"),
    shipper2: document.getElementById("shipper2"),
    shipper3: document.getElementById("shipper3"),
    invoice: document.getElementById("invoice"),
    kind1: document.getElementById("kind1"),
    kind2: document.getElementById("kind2"),
    kind: document.querySelector(".kind"),
    other_address: document.getElementById("other_address"),
    address1: document.getElementById("address1"),
    address2: document.getElementById("address2"),
    other: document.querySelector(".address2"),
    cif: document.getElementById("cif"),
    phone: document.getElementById("phone"),
    whatsapp1: document.getElementById("whatsapp1"),
    whatsapp2: document.getElementById("whatsapp2"),
    email: document.getElementById("email")
};

function changeKind(kind) // Al Cambiar el Radio Button Llama a Este Método, recibe un booleano.
{
    if (kind) // Si es true.
    {
        DOMDATA.kind.style.visibility = "visible";
    }
    else
    {
        DOMDATA.kind.style.visibility = "hidden";
    }
}

function changeAddress(other) // Al Cambiar el Radio Button Llama a Este Método, recibe un booleano.
{
    if (other) // Si es true.
    {
        DOMDATA.other.style.visibility = "visible";
    }
    else
    {
        DOMDATA.other.style.visibility = "hidden";
    }
}

function checkKind() // Este Método se Llama al Presionar el Input Submit del Formulario.
{
    if (DOMDATA.kind1.checked) // Si está Selecionado el Primer Radio Button de los Tipos de Facturación.
    {
        kind = DOMDATA.kind1.value; // Asigna el Valor del Radio Button a kind (Tipo de Facturación, Particular).
        DOMDATA.cif.required = false; // Quita el atributo required del Input con ID cif.
    }
    else // Si Está Seleccionado el Segundo Radio Button.
    {
        kind = DOMDATA.kind2.value; // Asigna el Valor del Radio Button a kind (Tipo de Facturación, Empresa).
    }

    if (DOMDATA.address1.checked) // Si está Selecionado el Primer Radio Button de la Dirección de Entrega.
    {
        address = DOMDATA.address.value; // Asigna el Valor en el Input con ID address a addres, No se cambiará la Dirección.
        DOMDATA.other_address.required = false; // Quita el atributo required del Input con ID other_address.
    }
    else // Si está Seleccioando el Segundo Radio Button.
    {
        address = DOMDATA.other_address.value; // Asigna el Valor en el Input con ID other_address a addres, Cambiará la Dirección.
        DOMDATA.address.required = false; // Quita el atributo required del Input con ID address.
        DOMDATA.cp.required = false; // Quita el atributo required del Input con ID cp.
        DOMDATA.cp.value = ""; // Asigna una string vacía al Input con ID cp, Vacía el Campo cp (Código Postal).
    }
}

function storeData(event) // Se Llama a Esta Función en el onsubmit del Formulario, Recibe el Evento.
{
    event.preventDefault(); // Evita que se envía el Formulario.
    let shipper;
    let whatsapp;
    let name = DOMDATA.name.value;
    let surname = DOMDATA.surname.value;
    let surname2 = DOMDATA.surname2.value;
    let dni = DOMDATA.dni.value;
    let cp = DOMDATA.cp.value;

    if (DOMDATA.shipper1.checked)
    {
        shipper = DOMDATA.shipper1.value;
    }
    else if (DOMDATA.shipper2.checked)
    {
        shipper = DOMDATA.shipper2.value;
    }
    else
    {
        shipper = DOMDATA.shipper3.value;
    }
    fixTotal(shipper);

    let invoice = DOMDATA.invoice.value;

    let cif = DOMDATA.cif.value;
    let phone = DOMDATA.phone.value;

    if (DOMDATA.whatsapp1.checked)
    {
        whatsapp = DOMDATA.whatsapp1.value;
    }
    else
    {
        whatsapp = DOMDATA.whatsapp2.value;
    }

    let email = DOMDATA.email.value;

    let result = [{
        name: name,
        surname: surname,
        surname2: surname2,
        dni: dni,
        address: address,
        cp: cp,
        shipper: shipper,
        invoice: invoice,
        kind: kind,
        cif: cif,
        phone: phone,
        whatsapp: whatsapp,
        email: email,
    }];

    localStorage.setItem("data", JSON.stringify(result)); // Almaceno en localStorage todos los datos.
    window.open("../payment/index.html", "_self");
}

function fixTotal(shipper)
{
    let total = 0;
    switch (shipper)
    {
        case "Correos de España":
            total = parseFloat(localStorage.getItem("total")) + 7;
            break;
        case "DHL":
            total = parseFloat(localStorage.getItem("total")) + 15;
            break;
        default:
            total = parseFloat(localStorage.getItem("total")) + 25;
    }
    localStorage.setItem("total", total);
}