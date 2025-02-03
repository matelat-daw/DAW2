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
    title: document.getElementById("title"),
    desc: document.getElementById("desc"),
    tit: document.getElementById("tit"),
    des: document.getElementById("des"),
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
    account_error: document.getElementById("account_required_error"),
    year_error: document.getElementById("year_error"),
    hobby_error: document.getElementById("hobby_error"),
    tit_error: document.getElementById("tit_error"),
    des_error: document.getElementById("des_error")
};

let error;
checkErrors();

// function checkErrors() {
//     error = false;
//     Object.keys(ERROR).forEach(key => {
//         const errorElement = ERROR[key];
//         const domElement = DOM[key.replace('_error', '')];
//         if (domElement) {
//             if (domElement.validationMessage) {
//                 errorElement.innerHTML = domElement.validationMessage;
//                 error = true;
//             } else {
//                 errorElement.innerHTML = "";
//             }
//         } else if (key === "account_required_error" && key === "hobby_error") {
//             if (DOM[key.replace('_error', '')].style.visibility !== "hidden") {
//                 errorElement.innerHTML = DOM[key.replace('_error', '')].innerHTML;
//                 error = true;
//             } else {
//                 errorElement.innerHTML = "";
//             }
//         }
//     });
//     return error;
// }

function checkErrors() {
    error = false;
    Object.keys(ERROR).forEach(key => {
        const element = ERROR[key];
        const domElement = DOM[key.replace('_error', '')];
        console.log(domElement.id);
        if (domElement.id == "account_required" || domElement.id == "hobby_required") {
            if (domElement.style.visibility === "visible") {
                element.innerHTML = "Completa este Campo";
                error = true;
            } else {
                element.innerHTML = "";
            }
        }
        else if (domElement) {
            if (domElement.validationMessage) {
                element.innerHTML = domElement.validationMessage;
                error = true;
            } else {
                element.innerHTML = "";
            }
        } else if (key === "account_error" || key === "hobby_error") {
            if (DOM[key.replace('_error', '')].style.visibility !== "hidden") {
                element.innerHTML = DOM[key.replace('_error', '')].innerHTML;
                error = true;
            } else {
                element.innerHTML = "";
            }
        }
    });
    return error;
}

DOM.form_submit.addEventListener("click", checkErrors);

DOM.par.addEventListener("click", () => {
    DOM.account.style.visibility = "hidden";
});

DOM.emp.addEventListener("click", () => {
    DOM.account.style.visibility = "hidden";
});

DOM.tit.addEventListener("input", () => {
    DOM.title.innerHTML = DOM.tit.value.length;
});

DOM.des.addEventListener("input", () => {
    DOM.desc.innerHTML = DOM.des.value.length;
});

DOM.check.addEventListener("click", () => {
    togglePass(DOM.pass, DOM.check);
});

DOM.doc.addEventListener("change", () => {
    enableDNI(DOM.doc, DOM.dni);
});

DOM.form.addEventListener("submit", (e) => {
    if (checkErrors() || !verify(DOM.dni.value) || hobbies.length <= 1) {
        e.preventDefault();
    } else {
        DOM.aficiones.value = hobbies.join(", ");
    }
});

for (let year = 1920; year <= 2010; year++) {
    const option = document.createElement("option");
    option.text = year;
    option.value = year;
    DOM.year.appendChild(option);
}

let hobbies = [];

DOM.checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            hobbies.push(checkbox.value);
        } else {
            fixHobbies(checkbox.value);
        }
        checkHobbies();
    });
});

function fixHobbies(hobby) {
    hobbies = hobbies.filter(h => h !== hobby);
}

function checkHobbies() {
    DOM.hobby.style.visibility = hobbies.length > 1 ? "hidden" : "visible";
}

function togglePass(pass, check) {
    pass.type = check.checked ? "text" : "password";
}

function enableDNI(selector, dni) {
    dni.disabled = !selector.value;
}

function verify(dni) {
    const expresion_regular_dni = /^[XYZ]?\d{2,9}[A-Z]$/;
    if (expresion_regular_dni.test(dni)) {
        let numero = dni.substr(0, dni.length - 1).replace('X', 0).replace('Y', 1).replace('Z', 2);
        const letra = dni.substr(dni.length - 1, 1).toUpperCase();
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        if (letras[numero % 23] !== letra) {
            alert('El D.N.I. o N.I.E. es Incorrecto, Verifica que los Números y la Letra o Letras Estén Bien.');
            return false;
        }
        return true;
    }
    alert('El D.N.I. o N.I.E. es Incorrecto, Verifica que los Números y la Letra o Letras Estén Bien.');
    return false;
}