const DOM = {
    tableBody: document.getElementById("tableBody"),
    id: document.getElementById("id"),
    nombre: document.getElementById("nombre"),
    grupo: document.getElementById("grupo"),
    alertaDelete: document.getElementById("alertaDelete"),
    titleDelete: document.getElementById("titleDelete"),
    messageDelete: document.getElementById("messageDelete"),
    alerta: document.getElementById("alerta"),
    title: document.getElementById("title"),
    message: document.getElementById("message"),
    update: document.getElementById("updateIt")
}

// document.addEventListener("DOMContentLoaded", () => { // Listener que es Llamado Cuando se Carga el DOM
    crudRead();
    fetch("http://localhost:3000/grupos").then(respuesta => respuesta.json())
        .then(grupos => populateSelect(grupos))
        .catch(error => toast(2, "ERROR:", "Ha Ocurrido el Error: " + error)); // Este fetch Solicita el Objeto Grupos al Servidor, y si Todo es Correcto le pasa el Objeto con los Grupos a la Función populateSelect(grupos).
//   });

function populateSelect(options) // Rellena las Opciones del Select al Cargar la Página, Recibe el Objeto con los Grupos.
{
    options.map(grupo => {
        let option = document.createElement("option"); // Creo una Option para el Select.
        option.text = "Grupo: " + grupo.grupo; // Asigno el Texto para Mostrar.
        option.value = grupo.grupo; // Asigno al Valor.
        DOM.grupo.add(option); // Agrego la Option al Select con ID grupo.
      });
}

function checkForm() // Al Pulsar el Botón Agregar Alumno Llama a este Método.
{
    if (DOM.id.value == "") // Verifico el Campo ID del Formulario, Si Está Vacio.
    {
        if (DOM.nombre.value != "" && DOM.grupo.value != "") //  Verifico si los Campos Nombre y Grupo Tienen Datos
        {
            crudCreate(); // Llamo al Método crudCreate().
        }
        else // Si No.
        {
            toast(1, "Faltan Datos:", "¿Te Dejaste Algún Campo en Blanco? Verifica que Hayas Rellenado Todos los Datos"); // Mensaje de Error.
        }
    }
    else // Si No.
    {
        toast(1, "Crear Alumno:", "Para Crear un Alumno Deja el Campo ID en Blanco. Para Actualizar los Datos de un Alumno Pulsa en el Botón Actualizar. Gracias"); // Mensaje de Error.
    }
}

async function crudRead()
{
    await fetch("http://localhost:3000/alumnos").then(respuesta => respuesta.json())
            .catch(respuesta => toast(2, "Error de Conexión", "Lo Siento No hay Conexión con el Servidor. Asegurate de que el Servidor está en Ejecución. Error" + respuesta))
            .then(jsonData => drawTable(jsonData)); // Después de Leer los Datos del Servidor, Llamo a la función drawTable, Pasandole por Parametro los Datos.
}

function drawTable(data) // Dibuja la Tabla con los Datos del Servidor.
{
    let lista = "";
    data.map(alumno => {
        lista += `<tr><td> ${alumno.id} </td><td> ${alumno.nombre} </td><td> ${alumno.grupo} </td><td><input id="update" type="button" onclick="populateForm(${alumno.id}, '${alumno.nombre}', '${alumno.grupo}')" value="Actualizar" class="btn btn-primary">&nbsp;<input id="delete" type="button" onclick="deleteAlumno('Eliminar Alumno', 'Estás Seguro que Quieres Elimiar el Alumno ${alumno.nombre} con ID ${alumno.id}', ${alumno.id})" value="Eliminar" class="btn btn-danger"></td></tr>`;
    });

    tableBody.innerHTML = lista;
}

function populateForm(id, nombre, grupo)
{
    DOM.id.value = id;
    DOM.nombre.value = nombre;
    DOM.grupo.value = grupo;
    DOM.update.style.display = "block";
}

function formClean()
{
    DOM.id.value = "";
    DOM.nombre.value = "";
    DOM.grupo.value = "";
    DOM.update.style.display = "none";
}

function crudCreate()
{
    let datosCreate = {
        nombre: DOM.nombre.value,
        grupo: DOM.grupo.value
    }
    fetch("http://localhost:3000/alumnos", {
        method: "POST",
        body: JSON.stringify(datosCreate),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
    .catch(error => toast(2, "", "Error al Crear: " + error))
    .then(responce => formClean());
}

function crudUpdate(id)
{
    if (DOM.nombre.value != "" && DOM.grupo.value != "")
    {
        datosUpdate = {
            nombre: DOM.nombre.value,
            grupo: DOM.grupo.value
        }
        fetch("http://localhost:3000/alumnos/" + id, {
            method: "PATCH",
            body: JSON.stringify(datosUpdate),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
        .catch(error => toast(2, "Error al Actualizar:", "Parece que No Hay Conexión con el Servidor. " + error))
        .then(responce => formClean());
    }
    else
    {
        toast(1, "Faltan Datos:", "¿Te Dejaste Algún Campo en Blanco? Verifica que Hayas Rellenado Todos los Datos"); // Mensaje de Error.
    }
}

function crudDelete(id)
{
    fetch("http://localhost:3000/alumnos/" + id, {
        method: "DELETE"
        
    }).then(res => res.json)
    .catch(error => toast(2, "Error al Eliminar", "Parece que No Hay Conexión con el Servidor. " + error))
    .then(responce => formClean())
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

function deleteAlumno(ttl, msg, id)
{
    DOM.id.value = id;
    DOM.titleDelete.innerHTML = ttl; // Muestro los mensajes en el diálogo.
    DOM.messageDelete.innerHTML = msg;
    DOM.alertaDelete.click(); // Lo hago aparecer pulsando el botón con ID alertaDelete.
}