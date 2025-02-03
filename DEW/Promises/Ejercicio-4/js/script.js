const DOM = {
    result: document.getElementById("result")
}

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
                              {carrera: 'maraton',tiempoEnSegundos: 6188, distanciaKm: 42}
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
];

let html = "";
let contador = 0;
let resultado = 0;

// CREAR promesa
async function promesaCuentaKilometros(name){    
    let promesa = new Promise (function(llamarAlThen, llamarAlCatch){
            function contar(){
                let deportista = deportistas.find(deportista => deportista.nombre === name);
                if (deportista)
                {
                    contador = deportista.participaEn.reduce((kilometros, deportista) => kilometros + deportista.distanciaKm, 0);

                    llamarAlThen(contador);
                }
                else
                    llamarAlCatch(html += `Parece que el Deportista ${name} no Existe.<br><br>`);
            }
            setTimeout(contar, 4000);
    })
    return promesa;
}

await promesaCuentaKilometros("Juan").then(nuevoValor=>{
    resultado += nuevoValor;
    html += `1. Los Kilómetros Recorridos por Juan son: ${nuevoValor}<br>`;
    html += `El Resultado Parcial es: ${resultado}<br><br>`;
    result.innerHTML = html;
}).catch(error=>result.innerHTML = error);

await promesaCuentaKilometros("Carmen").then(nuevoValor=>{
    resultado += nuevoValor;
    html += `2. Los Kilómetros Recorridos por Carmen son: ${nuevoValor}<br>`;
    html += `El Resultado Final de Ambos Corredores es: ${resultado}<br>`;
    result.innerHTML = html;
}).catch(error=>result.innerHTML = error);