import * as ejercicios from './functions.js';

let deportistas=[
  {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', sexo: 'H', edad:25, equipo: 'Trotamundos',
              participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1855, distanciaKm: 8},
                            {carrera: 'mediaMaraton',tiempoEnSegundos: 4855, distanciaKm: 21},
                            {carrera: 'maraton',tiempoEnSegundos: 6055, distanciaKm: 42}
                          ]},
  {nombre: 'Juan', apellido1: 'Carballo', apellido2: 'Delgado', sexo: 'H', edad:45, equipo: 'Clator',
              participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1955, distanciaKm: 8},
                            {carrera: 'maraton',tiempoEnSegundos: 6155, distanciaKm: 42}
                          ]},
  {nombre: 'Ayoze', apellido1: 'Mesa', apellido2: 'Herrera', sexo: 'H', edad:38, equipo: 'Clator',
              participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1975, distanciaKm: 8},
                            {carrera: 'mediaMaraton',tiempoEnSegundos: 4985, distanciaKm: 21},
                            {carrera: 'maraton',tiempoEnSegundos: 6188}
                          ]},
  {nombre: 'Antonio', apellido1: 'Galván', apellido2: 'Vera', sexo: 'H', edad:61, equipo: 'Trotamundos',
              participaEn:[ {carrera: 'cuatroKm',tiempoEnSegundos: 995, distanciaKm: 4},
                            {carrera: 'ochoKm',tiempoEnSegundos: 2055, distanciaKm: 8},
                            {carrera: 'mediaMaraton',tiempoEnSegundos: 5855, distanciaKm: 21}
                          ]},
  {nombre: 'Carmen', apellido1: 'Morales', apellido2: 'Vera', sexo: 'M', edad:35, equipo: 'Trotamundos',
              participaEn:[ {carrera: 'cuatroKm',tiempoEnSegundos: 1055, distanciaKm: 4},
                            {carrera: 'ochoKm',tiempoEnSegundos: 2255, distanciaKm: 8},
                            {carrera: 'mediaMaraton',tiempoEnSegundos: 5985, distanciaKm: 21}
                          ]}
]

const DOM = {
  tablaEjercicio1: document.getElementById("tabla-ejercicio1"),
  tablaEjercicio2: document.getElementById("tabla-ejercicio2"),
  tablaDestinoEjercicio3: document.getElementById("tabla-destino-ejercicio3"),
  divEjercicio4: document.getElementById("div-ejercicio4"),
  botonEjercicio1: document.getElementById("probar1"),
  botonEjercicio2: document.getElementById("probar2"),
  botonEjercicio3: document.getElementById("probar3"),
  botonEjercicio4: document.getElementById("probar4")
};

(function()
{
  DOM.botonEjercicio1.addEventListener("click", probarEjercicio1);
  DOM.botonEjercicio2.addEventListener("click", probarEjercicio2);
  DOM.botonEjercicio3.addEventListener("click", probarEjercicio3);
  DOM.botonEjercicio4.addEventListener("click", probarEjercicio4);
})()

function probarEjercicio1()
{
  ejercicios.ejercicio1(DOM.tablaEjercicio1, deportistas)
}

function probarEjercicio2()
{
  DOM.tablaEjercicio2.innerHTML = ejercicios.ejercicio2(deportistas)
}

function probarEjercicio3()
{
  ejercicios.ejercicio3(DOM.tablaEjercicio1, DOM.tablaDestinoEjercicio3)
}

function probarEjercicio4()
{
  ejercicios.ejercicio4(DOM.divEjercicio4, deportistas)
}