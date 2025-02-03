//Agregar el DOM
const DOM = {
  form: document.getElementById('frm'),
  //DOM datos
  nombreUser: document.getElementById('nombreUser'),
  password: document.getElementById("password"),
  nombre: document.getElementById("nombre"),
  apellidos: document.getElementById("apellidos"),
  telefono: document.getElementById("tel"),
  codigoPostal: document.getElementById("codP"),
  dniNieInput: document.getElementById('dniText'),
  particular: document.getElementById("particular"),
  empresa: document.getElementById("empresa"),
  year: document.getElementById("year"),
  hiddenInput: document.getElementById('hideAficiones'),
  hobbiesList:document.querySelectorAll('.aficiones input[type="checkbox"]'),
  dptitle: document.getElementById("dptitle"),
  description: document.getElementById("description"),
  //DOM otras funcionalidades
  dniNieSelect: document.getElementById('dniNie'),
  checkbox: document.getElementById("checkbox"),
  aficiones1: document.getElementById("aficiones1"),
  aficiones2: document.getElementById("aficiones2"),
  aficiones3: document.getElementById("aficiones3"),
  aficiones4: document.getElementById("aficiones4"),
  aficiones5: document.getElementById("aficiones5"),
  aficiones6: document.getElementById("aficiones6"),
  contDesc: document.getElementById("contDesc"),
  conttitle: document.getElementById("conttitle"),
}

const ERROR = {
  errorUser: document.getElementById('errorUser'),
  errorPass: document.getElementById('errorPass'),
  errorNombre: document.getElementById('errorNombre'),
  errorApellidos: document.getElementById('errorApellidos'),
  errorTelefono: document.getElementById('errorTel'),
  errorCodigoPostal: document.getElementById('errorCodP'),
  errorDniNie: document.getElementById('errorDniNie'),
  errorTitulo: document.getElementById('errorTitle'),
  errorDescription: document.getElementById('errorDesc'),
  errorAficiones: document.getElementById('errorAficiones'),
  errorCuenta: document.getElementById('errorCuenta'),
}

const valida = {
  User: document.getElementById('validaUser'),
  Pass: document.getElementById('validaPass'),
  Nombre: document.getElementById('validaNombre'),
  Apellidos: document.getElementById('validaApellidos'),
  Telefono: document.getElementById('validaTel'),
  CodigoPostal: document.getElementById('validaCodP'),
  DniNie: document.getElementById('validaDniNie'),
  Titulo: document.getElementById('validaTitle'),
  Description: document.getElementById('validaDesc'),
  Aficiones: document.getElementById('validaAficiones'),
  Cuenta: document.getElementById('validaCuenta'),
}

const yearInicial = 1920
const yearFinal = 2010
for (let year = yearInicial; year <= yearFinal; year++) {
  let option = document.createElement("option")
  option.textContent = year;
  option.value = year;
  DOM.year.appendChild(option);
}

DOM.nombreUser.addEventListener("input", () => {
  if (!DOM.nombreUser.validationMessage == "") {
    ERROR.errorUser.textContent = "Campo obligatorio";
    valida.User.textContent="Nombre de Usuario incorrecto"
    valida.User.style.color="red";
  } else {
    ERROR.errorUser.textContent = "";
    DOM.nombreUser.setAttribute('style', 'border: 1px solid;');
    valida.User.textContent="Nombre de Usuario correcto"
    valida.User.style.color="green";
  }
})

DOM.password.addEventListener("input", () => {
  if (!DOM.password.validationMessage == "") {
    ERROR.errorPass.textContent = "Campo obligatorio";
    valida.Pass.textContent="Contraseña incorrecto"
    valida.Pass.style.color="red";

  } else {
    ERROR.errorPass.textContent = "";
    DOM.password.setAttribute('style', 'border: 1px solid;');
    valida.Pass.textContent="Contraseña correcto"
    valida.Pass.style.color="green";
  }
})


DOM.nombre.addEventListener("input", () => {
  if (!DOM.nombre.validationMessage == "") {
    ERROR.errorNombre.textContent = "Campo obligatorio";
    valida.Nombre.textContent="Nombre incorrecto"
    valida.Nombre.style.color="red";

  } else {
    ERROR.errorNombre.textContent = "";
    DOM.nombre.setAttribute('style', 'border: 1px solid;');
    valida.Nombre.textContent="Nombre correcto"
    valida.Nombre.style.color="green";
  }
})

DOM.apellidos.addEventListener("input", () => {
  if (!DOM.apellidos.validationMessage == "") {
    ERROR.errorApellidos.textContent = "Campo obligatorio";
    valida.Apellidos.textContent="Apellidos incorrecto"
    valida.Apellidos.style.color="red";
  } else {
    ERROR.errorApellidos.textContent = "";
    DOM.apellidos.setAttribute('style', 'border: 1px solid;');
    valida.Apellidos.textContent="Apellidos correcto"
    valida.Apellidos.style.color="green";
  }
})

DOM.telefono.addEventListener("input", () => {
  if (!DOM.telefono.validationMessage == "") {
    ERROR.errorTelefono.textContent = "Campo obligatorio";
    valida.Telefono.textContent="Telefono incorrecto"
    valida.Telefono.style.color="red";
  } else {
    ERROR.errorTelefono.textContent = "";
    DOM.telefono.setAttribute('style', 'border: 1px solid;');
    valida.Telefono.textContent="Telefono correcto"
    valida.Telefono.style.color="green";
  }
})

DOM.codigoPostal.addEventListener("input", () => {
  if (!DOM.codigoPostal.validationMessage == "") {
    ERROR.errorCodigoPostal.textContent = "Campo obligatorio";
    valida.CodigoPostal.textContent="Codigo Postal incorrecto"
    valida.CodigoPostal.style.color="red";
  } else {
    ERROR.errorCodigoPostal.textContent = "";
    DOM.codigoPostal.setAttribute('style', 'border: 1px solid;');
    valida.CodigoPostal.textContent="Codigo Postal correcto"
    valida.CodigoPostal.style.color="green";
  }
})
DOM.dniNieInput.addEventListener("input", () => {
  if (!DOM.dniNieInput.validationMessage == "") {
    ERROR.errorDniNie.textContent = "Campo obligatorio";
    valida.DniNie.textContent="DniNie incorrecto"
    valida.DniNie.style.color="red";
  } else {
    ERROR.errorDniNie.textContent = "";
    DOM.dniNieInput.setAttribute('style', 'border: 1px solid;');
    valida.DniNie.textContent="DniNie correcto"
    valida.DniNie.style.color="green";
  }
})


DOM.dptitle.addEventListener("input", () => {
  var conT = DOM.dptitle.value.length;
  conttitle.textContent = `${conT}/15`;
  if (!DOM.dptitle.validationMessage == "") {
    ERROR.errorTitulo.textContent = "Campo obligatorio";
    valida.Titulo.textContent="Codigo Postal incorrecto";
    valida.Titulo.style.color="red";
  } else {
    ERROR.errorTitulo.textContent = "";
    DOM.dptitle.setAttribute('style', 'border: 1px solid;');
    valida.Titulo.textContent="Codigo Postal correcto";
    valida.Titulo.style.color="green";
  }
})

DOM.description.addEventListener("input", () => {
  const conD = DOM.description.value.length
  DOM.contDesc.textContent = `${conD} /120`;
  if (!DOM.description.validationMessage == "") {
    ERROR.errorDescription.textContent = "Campo obligatorio";
    valida.Description.textContent="Description incorrecto";
    valida.Description.style.color="red";
  } else {
    ERROR.errorDescription.textContent = "";
    DOM.description.setAttribute('style', 'border: 1px solid;');
    valida.Description.textContent="Description correcto";
    valida.Description.style.color="green";
  }
})

DOM.form.addEventListener("submit", (e) => {
  if (!DOM.nombreUser.validationMessage == "") {
    e.preventDefault()
    ERROR.errorUser.textContent = "Campo obligatorio";
    DOM.nombreUser.setAttribute('style', 'border: 1px solid red;');
  } 

  if (!DOM.password.validationMessage == "") {
    e.preventDefault()
    ERROR.errorPass.textContent = "Campo obligatorio";
    DOM.password.setAttribute('style', 'border: 1px solid red;');
  }
  if (!DOM.nombre.validationMessage == "") {
    e.preventDefault()
    ERROR.errorNombre.textContent = "Campo obligatorio";
    DOM.nombre.setAttribute('style', 'border: 1px solid red;');
  }
  if (!DOM.apellidos.validationMessage == "") {
    e.preventDefault()
    ERROR.errorApellidos.textContent = "Campo obligatorio";
    DOM.apellidos.setAttribute('style', 'border: 1px solid red;');
  }
  if (!DOM.telefono.validationMessage == "") {
    e.preventDefault()
    ERROR.errorTelefono.textContent = "Campo obligatorio";
    DOM.telefono.setAttribute('style', 'border: 1px solid red;');
  }

  if (!DOM.codigoPostal.validationMessage == "") {
    e.preventDefault()
    ERROR.errorCodigoPostal.textContent = "Campo obligatorio";
    DOM.codigoPostal.setAttribute('style', 'border: 1px solid red;');
  }

  if (!DOM.dniNieInput.validationMessage == "") {
    e.preventDefault()
    ERROR.errorDniNie.textContent = "Campo obligatorio";
    DOM.dniNieInput.setAttribute('style', 'border: 1px solid red;');
  }

  if (!DOM.dptitle.validationMessage == "") {
    e.preventDefault()
    ERROR.errorTitulo.textContent = "Campo obligatorio";
    DOM.dptitle.setAttribute('style', 'border: 1px solid red;');
  }
  if (!DOM.description.validationMessage == "") {
    e.preventDefault()
    ERROR.errorDescription.textContent = "Campo obligatorio";
    DOM.description.setAttribute('style', 'border: 1px solid red;');
  }
  if (!DOM.dniNieSelect.validationMessage == "") {
    e.preventDefault()
    ERROR.errorDniNie.textContent = "Campo obligatorio";
    DOM.dniNieSelect.setAttribute('style', 'border: 1px solid red;');
  }
  if (!DOM.hiddenInput.validationMessage == "") {
    e.preventDefault()
    ERROR.errorDniNie.textContent = "Campo obligatorio";
    DOM.dniNieSelect.setAttribute('style', 'border: 1px solid red;');
  }
})

DOM.checkbox.addEventListener("click", () => { myFunction(DOM.password) });

DOM.dniNieSelect.addEventListener("change", () => {
  habilitarInput(DOM.dniNieSelect, DOM.dniNieInput)
})
DOM.dniNieInput.addEventListener("input", validarDniNie(DOM.dniNieSelect));


DOM.hobbiesList.forEach(hobby => {
  hobby.addEventListener("change", () => {
      let hobbiesList = [...DOM.hobbiesList];
      let checkedHobbies = hobbiesList.filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
      DOM.hiddenInput.value = checkedHobbies.length >= 2 ? checkedHobbies.join(",") : "";
      if (checkedHobbies.length >= 2) ERROR.errorAficiones.textContent = "";
  })
});

// Validar DNI
function validarDniNie(dniNieSelect) {
  // Expresión regular para validar NIE (una letra seguida de 7 dígitos y una letra final)
  const regexNie = /^[XYZ]\d{7}[A-Za-z]$/;
  const regexDni = /^\d{8}[A-Za-z]$/;
  // Comprobamos si el valor coincide con alguna de las expresiones regulares
  if (regexDni.test(dniNieSelect.value)) {
    dniNieSelect.style.color = "green";
  }
  else if (regexNie.test(dniNieSelect.value)) {
    dniNieSelect.style.color = "blue";
  }
  else {
    dniNieSelect.style.color = "red";
  }
}
// Contador de palabras
function myFunction(password) {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function habilitarInput(dniNieSelect, dniTextInput) {
  if (dniNieSelect.value == 'DNI') {
    // Habilitamos el input y establecemos el placeholder para el DNI
    dniTextInput.disabled = false;
    dniTextInput.placeholder = "12345678A"; // Formato de DNI
  } else if (dniNieSelect.value == 'NIE') {
    // Habilitamos el input y establecemos el placeholder para el NIE
    dniTextInput.disabled = false;
    dniTextInput.placeholder = "X1234567T"; // Formato de NIE
  } else {
    // Si no se ha seleccionado DNI ni NIE, deshabilitamos el input
    dniTextInput.disabled = true;
    dniTextInput.placeholder = "DNI/NIE"; // Placeholder predeterminado
  }
}