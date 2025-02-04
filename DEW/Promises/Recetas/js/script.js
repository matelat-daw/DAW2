const DOM = {
    flex: document.getElementById("flex")
}

async function crudRead()
{
    await fetch("http://localhost:3000/recetas").then(respuesta => respuesta.json())
            .catch(respuesta => toast(2, "Error de Conexión", "Lo Siento No hay Conexión con el Servidor. Asegurate de que el Servidor está en Ejecución. Error" + respuesta))
            .then(jsonData => getImages(jsonData)); // Después de Leer los Datos del Servidor, Llamo a la función getImages(jsonData), Pasandole por Parametro los Datos.
}

function getImages(jsonData)
{
    jsonData.filter(tipo => tipo.cuisine == "Italian").map(tipo => blobConverter(tipo.image));
}

async function blobConverter(urlImg){
    console.log(urlImg);
    let blobImg;
    await fetch(urlImg)
    .then(res => res.blob())
    .then(blob => blobImg=blob);
    // Crear los elementos
    crearElementos(blobImg);
}

function crearElementos (blobImg)
{
    let div, img;
    div = document.createElement("div");
    img = document.createElement("img");
    div.appendChild(img);
    img.src = URL.createObjectURL(blobImg);
    DOM.flex.appendChild(div);
}

function toast(warn, ttl, msg) // Función para mostrar el Dialogo con los mensajes de alerta, recibe, Código, Título y Mensaje.
{
    if (warn == 1) // Si el código es 1, es una alerta.
    {
        DOM.title.style.backgroundColor = "#000000"; // Pongo los atributos, color de fondo negro.
        DOM.title.style.color = "yellow"; // Y color del texto amarillo.
    }
    else if (warn == 0) // Si no, si el código es 0 es un mensaje satisfactorio.
    {
        DOM.title.style.backgroundColor = "#FFFFFF"; // Pongo los atributos, color de fondo blanco.
        DOM.title.style.color = "blue"; // Y el color del texto azul.
    }
    else // Si no, viene un 2, es una alerta de error.
    {
        DOM.title.style.backgroundColor = "#000000"; // Pongo los atributos, color de fondo negro.
        DOM.title.style.color = "red"; // Y color del texto rojo.
    }
    DOM.title.innerHTML = ttl; // Muestro el Título del dialogo.
    DOM.message.innerHTML = msg; // Muestro los mensajes en el diálogo.
    DOM.alerta.click(); // Lo hago aparecer pulsando el botón con ID alerta.
}