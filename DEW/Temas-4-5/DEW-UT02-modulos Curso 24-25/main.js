// import {ciclo, curso, asignatura} from "./component.js"; // Normal
// import ciclo, {curso, asignatura} from "./component.js"; // Por Defecto.
// import ciclo, {curso, asignatura as modulo} from "./component.js"; // Pone un Alias.
// import ciclo, * as modulos from "./component.js"; // Importa la por defecto y las otras como modulos.
import * as modulos from "./component.js"; // Para usar el modificador Universal hay que crear un alias y acceder a las funciones importadas a través del alias ej: (Alias modulos) = modulos.curso.


const DOM = {
  ciclo: document.getElementById("ciclo"),
  curso: document.getElementById("curso"),
  modulo: document.getElementById("modulo")
};

(function(){
  DOM.ciclo.textContent = modulos.default(); // La exportación por defecto se usa así.
  // DOM.curso.textContent = curso();
  DOM.curso.textContent = modulos.curso();
  // DOM.modulo.textContent = asignatura();
  DOM.modulo.textContent = modulos.modulo(); // Asignatura se exporta con alias modulo.
  // DOM.modulo.textContent = modulo(); // Asignatura se exporta con alias modulo.
})()