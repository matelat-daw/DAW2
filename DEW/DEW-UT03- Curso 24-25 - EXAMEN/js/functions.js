function ejercicio1(elementoTabla, deportistas){
  let trHead = document.createElement("tr");
  let thNombre = document.createElement("th");
  let thApellido1 = document.createElement("th");
  let thApellido2 = document.createElement("th");
  thNombre.textContent = "Nombre";
  thApellido1.textContent = "Apellido 1";
  thApellido2.textContent = " Apellido 2";
  trHead.append(thNombre,thApellido1,thApellido2);
  elementoTabla.appendChild(trHead);
  deportistas.forEach(deportista => {
    let trData = document.createElement("tr");
    let tdNombre = document.createElement("td");
    let tdApellido1 = document.createElement("td");
    let tdApellido2 = document.createElement("td");
    tdNombre.textContent = deportista.nombre;
    tdApellido1.textContent = deportista.apellido1;
    tdApellido2.textContent = deportista.apellido2;
    trData.append(tdNombre,tdApellido1,tdApellido2);
    elementoTabla.appendChild(trData);
  });
}

function ejercicio2(deportistas){
  let deportistasFragmento = '';
  deportistas.forEach(deportista => {
    deportistasFragmento += `
    <tr>
      <td>${deportista.nombre}</td>
      <td>${deportista.apellido1}</td>
      <td>${deportista.apellido2}</td>
    </tr>
    `;
  });

  return `
  <tr>
    <th>Nombre</th>
    <th>Apellido 1</th>
    <th>Apellido 2</th>
  </tr>
  ${deportistasFragmento}
  `;
}

function ejercicio3(tablaOrigen, tablaDestino){
  let filasOrigen = tablaOrigen.children;
  let arrayElementos = [...filasOrigen];
  arrayElementos.forEach(fila => tablaDestino.appendChild(fila));
}

function ejercicio4(elementoPadre, deportistas){
  deportistas.sort((a, b) => a.equipo.localeCompare(b.equipo))
  let currentTeam = '';
  let details, summary, list, li;

  deportistas.forEach(deportista => {
    if(deportista.equipo != currentTeam){
      currentTeam = deportista.equipo;
      details = document.createElement("details");
      summary = document.createElement("summary");
      list = document.createElement("ul");
      summary.textContent = deportista.equipo;
      details.appendChild(summary);
      details.appendChild(list);
      elementoPadre.appendChild(details);
    }
    li = document.createElement("li");
    li.textContent = `${deportista.nombre} ${deportista.apellido1} ${deportista.apellido2}`;
    list.appendChild(li);
  })
}

export {ejercicio1, ejercicio2, ejercicio3, ejercicio4};