const DOM = {
    form: document.getElementById("form"),
    form_submit: document.getElementById("form_submit"),
    username: document.getElementById("username"),
    pass: document.getElementById("pass"),
    check: document.getElementById("check"),
    userdata: document.getElementById("userdata"),
    surname: document.getElementById("surname"),
    phone: document.getElementById("phone"),
    cp: document.getElementById("cp"),
    year: document.getElementById("year"),
    doc: document.getElementById("doc"),
    dni: document.getElementById("dni"),
    par: document.getElementById("par"),
    emp: document.getElementById("emp"),
    account: document.getElementById("account_required"),
    title: document.getElementById("title"), // Elemento small.
    desc: document.getElementById("desc"), // Elemeto small.
    tit: document.getElementById("tit"), // Elemento input.
    des: document.getElementById("des"), // Elemento textarea.
    music: document.getElementById("music"),
    handmade: document.getElementById("handmade"),
    sport: document.getElementById("sport"),
    art: document.getElementById("art"),
    games: document.getElementById("games"),
    lecture: document.getElementById("lecture"),
    aficiones: document.getElementById("aficiones"),
    checkboxes: document.querySelectorAll("input[type='checkbox']"),
    hobby: document.getElementById("hobby_required")
};

const ERROR = {
    username_error: document.getElementById("username_error"),
    pass_error: document.getElementById("pass_error"),
    userdata_error: document.getElementById("userdata_error"),
    surname_error: document.getElementById("surname_error"),
    phone_error: document.getElementById("phone_error"),
    cp_error: document.getElementById("cp_error"),
    doc_error: document.getElementById("doc_error"),
    dni_error: document.getElementById("dni_error"),
    account_error: document.getElementById("account_error"),
    year_error: document.getElementById("year_error"),
    hobby_error: document.getElementById("hobby_error"),
    tit_error: document.getElementById("title_error"),
    des_error: document.getElementById("desc_error")
};

let error;
checkErrors();

function checkErrors()
{
    Object.keys(ERROR).forEach(function(key)
    {
        switch(key)
        {
            case "username_error":
                if (DOM.username.validationMessage != "")
                {
                    username_error.innerHTML = DOM.username.validationMessage;
                    error = true;
                }
                else
                {
                    username_error.innerHTML = "";
                    error = false;
                }
                break;
            case "pass_error":
                if (DOM.pass.validationMessage != "")
                {
                    pass_error.innerHTML = DOM.pass.validationMessage;
                    error = true;
                }
                else
                {
                    pass_error.innerHTML = "";
                    error = false;
                }
                break;
            case "userdata_error":
                if (DOM.userdata.validationMessage != "")
                {
                    userdata_error.innerHTML = DOM.userdata.validationMessage;
                    error = true;
                }
                else
                {
                    userdata_error.innerHTML = "";
                    error = false;
                }
                break;
            case "surname_error":
                if (DOM.surname.validationMessage != "")
                {
                    surname_error.innerHTML = DOM.surname.validationMessage;
                    error = true;
                }
                else
                {
                    surname_error.innerHTML = "";
                    error = false;
                }
                break;
            case "phone_error":
                if (DOM.phone.validationMessage != "")
                {
                    phone_error.innerHTML = DOM.phone.validationMessage;
                    error = true;
                }
                else
                {
                    phone_error.innerHTML = "";
                    error = false;
                }
                break;
            case "cp_error":
                if (DOM.cp.validationMessage != "")
                {
                    cp_error.innerHTML = DOM.cp.validationMessage;
                    error = true;
                }
                else
                {
                    cp_error.innerHTML = "";
                    error = false;
                }
                break;
            case "doc_error":
                if (DOM.doc.validationMessage != "")
                {
                    doc_error.innerHTML = DOM.doc.validationMessage;
                    error = true;
                }
                else
                {
                    doc_error.innerHTML = "";
                    error = false;
                }
                break;
            case "dni_error":
                if (DOM.dni.disabled)
                {
                    dni_error.innerHTML = DOM.dni.validationMessage;
                    error = true;
                }
                else
                {
                    if (DOM.dni.validationMessage != "")
                    {
                        dni_error.innerHTML = DOM.dni.validationMessage;
                        error = true;
                    }
                    else
                    {
                        dni_error.innerHTML = "";
                        error = false;
                    }
                }
                break;
            case "account_error":
                if (DOM.account.style.visibility != "hidden")
                {
                    account_error.innerHTML = DOM.account.innerHTML;
                    error = true;
                }
                else
                {
                    account_error.innerHTML = "";
                    error = false;
                }
                break;
            case "year_error":
                if (DOM.year.validationMessage != "")
                {
                    year_error.innerHTML = DOM.year.validationMessage;
                    error = true;
                }
                else
                {
                    year_error.innerHTML = "";
                    error = false;
                }
                break;
            case "title_error":
                if (DOM.tit.validationMessage != "")
                {
                    title_error.innerHTML = DOM.tit.validationMessage;
                    error = true;
                }
                else
                {
                    title_error.innerHTML = "";
                    error = false;
                }
                break;
            case "desc_error":
                if (DOM.des.validationMessage != "")
                {
                    desc_error.innerHTML = DOM.des.validationMessage;
                    error = true;
                }
                else
                {
                    desc_error.innerHTML = "";
                    error = false;
                }
                break;
            case "hobby_error":
                if (DOM.hobby.style.visibility != "hidden")
                {
                    hobby_error.innerHTML = DOM.hobby.innerHTML;
                    error = true;
                }
                else
                {
                    hobby_error.innerHTML = "";
                    error = false;
                }
                break;
        }
    });
    if (error)
    {
        return true;
    }
    return false;
}

DOM.form_submit.addEventListener("click", () => {
    checkErrors();
});

DOM.par.addEventListener("click", () => {
    DOM.account.style.visibility = "hidden";
});

DOM.emp.addEventListener("click", () => {
    DOM.account.style.visibility = "hidden";
});

DOM.tit.addEventListener("input", function()
{
    DOM.title.innerHTML = DOM.tit.value.length;
});

DOM.des.addEventListener("input", function()
{
    DOM.desc.innerHTML = DOM.des.value.length;
});

DOM.check.addEventListener("click", function()
{
    togglePass(DOM.pass, DOM.check)
});

DOM.doc.addEventListener("change", () =>
{
    enableDNI(DOM.doc, DOM.dni)
});

DOM.form.addEventListener("submit", (e) =>
{
    error = checkErrors();
    if (error)
    {
        e.preventDefault();
        checkErrors();
    }
    else
    {
        let result = verify(DOM.dni.value);
        if (!result) // Verifica si el DNI es Correcto.
        {
            e.preventDefault();
        }
        else
        {
            if (hobbies.length <= 1) // Verifica si no se Seleccionó Más de 1 Hobby.
            {
                e.preventDefault();
            }
            else // Si se Selecionó Más de 1.
            {
                DOM.aficiones.value = hobbies.join(", ");
            }
        }
    }
});

for (var year = 1920 ; year <= 2010; year++) // Bucle para Agregar los Años al Selector del Año de Nacimiento desde 1920 a 2010.
{  
    var option = document.createElement("option");
    option.text = year;
    option.value = year;
    
    DOM.year.appendChild(option);   
}

let hobbies = []; // Array de Aficiones, Contendrá las Aficiones Seleccionadas de los Checkboxes, Hay que Agregar un Event Listener a cada Checkbox.

DOM.music.addEventListener("click", () =>
{
    if (DOM.music.checked) // Si el Checkbox music Está Chequeado.
    {
        hobbies.push(DOM.music.value); // Lo Agrega al Array.
    }
    else // Si se Deselecciona.
    {
        fixHobbies(DOM.music.value); // Llama a la Función fixHobbies Pasandole el Valor del Checkbox por Parametro.
    }
    checkHobbies();
});

DOM.handmade.addEventListener("click", () =>
{
    if (DOM.handmade.checked)
    {
        hobbies.push(DOM.handmade.value);
    }
    else
    {
        fixHobbies(DOM.handmade.value);
    }
    checkHobbies();
});

DOM.sport.addEventListener("click", () =>
{
    if (DOM.sport.checked)
    {
        hobbies.push(DOM.sport.value);
    }
    else
    {
        fixHobbies(DOM.sport.value);
    }
    checkHobbies();
});

DOM.art.addEventListener("click", () =>
{
    if (DOM.art.checked)
    {
        hobbies.push(DOM.art.value);
    }
    else
    {
        fixHobbies(DOM.art.value);
    }
    checkHobbies();
});

DOM.games.addEventListener("click", () =>
{
    if (DOM.games.checked)
    {
        hobbies.push(DOM.games.value);
    }
    else
    {
        fixHobbies(DOM.games.value);
    }
    checkHobbies();
});

DOM.lecture.addEventListener("click", () =>
{
    if (DOM.lecture.checked)
    {
        hobbies.push(DOM.lecture.value)
    }
    else
    {
        fixHobbies(DOM.lecture.value);
    }
    checkHobbies();
});

function fixHobbies(hobby) // Función fixHobbies Recibe el Valor del Input Type Checkbox.
{
    let index = hobbies.indexOf(hobby); // Obtiene el Índice en el Array.
    hobbies.splice(index, 1); // Lo Elimina del Array.
}

function checkHobbies() // Función Para Verificar la Cantidad de Aficiones que se Han Añadido.
{
    if (hobbies.length > 1) // Si en el Array Hay Más de 1.
    {
        DOM.hobby.style.visibility = "hidden"; // Oculta el Mensaje Selecciona al Menos 2 Aficiones.
    }
    else // Si no Hay 1 o Más de 1 Afición.
    {
        DOM.hobby.style.visibility = "visible"; // Muestra el Mensaje.
    }
}

function togglePass(pass, check) // Función que Cambia el Tipo de Dato del Input Type Password, Dependiendo de si se Chequea el Input Type Checkbox, Recibe el Input Password y el Checkbox.
{
    pass.type = check.checked ? "text" : "password"; // Si el Checkbox Está Chequeado, lo Convierte a Tipo Texto, si no a Tipo Password.
}

function enableDNI(selector, dni) // Activa el Input para el Número de DNI, Recibe el Selector de tipo y el Input del DNI/NIE.
{
    if (selector.value != "") // Si el Valor del Selector no está Vacío.
    {
        dni.disabled = false; // Habilita el Input del DNI/NIE.
    }
    else // Si Está Vacio.
    {
        dni.disabled = true; // Lo Deshabilita.
    }
}

function verify(dni) // Función para validar D.N.I. y N.I.E., Recibe el Valor del Input del DNI/NIE.
{
    var numero, letra, letras;
    var expresion_regular_dni = /^[XYZ]?\d{2,9}[A-Z]$/;

    if(expresion_regular_dni.test(dni) === true)
    {
        numero = dni.substr(0, dni.length - 1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        letra = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        letras = letras.substring(numero, numero + 1);
        if (letras != letra.toUpperCase())
        {
            alert('El D.N.I. o N.I.E. es Incorrecto, Verifica que los Números y la Letra o Letras Estén Bien.');
            return false;
        }
        else
        {
            return true;
        }
    }
    else
    {
        alert('El D.N.I. o N.I.E. es Incorrecto, Verifica que los Números y la Letra o Letras Estén Bien.');
        return false;
    }
}