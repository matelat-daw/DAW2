const DOM =
{
    result: document.getElementById("result"),
};

let contadorDeClicks = 0;

document.addEventListener("click", ()=>{
    contadorDeClicks++;
    console.log("CLICK!!");
});

let promesa4Clicks;
let html = "";

function prometer4Clicks()
{
    html += "2)-. Dispones de 5 Segundos Para Cumplirla.<br>";
    result.innerHTML = html;
    let promesa = new Promise (function(llamarAlThen, llamarAlCatch)
    {
        function comprobarPromesa()
        {
            if (contadorDeClicks >= 4)
                llamarAlThen(html += "3)-. Sí, ¡¡Muy Bien!! ... Has Cumplido tu Promesa de Hacer 4 Clicks en 5 Segundos.<br><br>")
            else
                llamarAlCatch(html += "3)-. No, ¡¡VAYA!! NO has Cumplido tu Promesa de Hacer 4 Clicks en 5 Segundos.<br><br>")
        }
        setTimeout(comprobarPromesa, 5000);
        setTimeout(iniciarPromesa4Teclas, 5000);
    })
    return promesa;
}

async function iniciarPromesa4Clicks()
{
    html += "1)-. Iniciar Promesa de Hacer 4 Clicks.<br>";
    result.innerHTML = html;
    promesa4Clicks = await prometer4Clicks()
    .then(respuesta=>result.innerHTML = html)
    .catch(respuesta=>result.innerHTML = html)
}

iniciarPromesa4Clicks();

let contadorDeTeclas = 0;

document.addEventListener("keypress", ()=>{
    contadorDeTeclas++;
    console.log("Tecla Pulsada!!");
});

let promesa4Teclas;

function prometer4Teclas()
{
    html += "5)-. Dispones de 5 Segundos Para Cumplirla.<br>";
    result.innerHTML = html;
    let promesa = new Promise (function(llamarAlThen, llamarAlCatch)
    {
        function comprobarPromesa()
        {
            if (contadorDeTeclas >= 4)
                llamarAlThen(html += "6)-. Sí, ¡¡Muy Bien!! ... Has Cumplido tu Promesa de Pulsar 4 Teclas en 5 Segundos.");
            else
                llamarAlCatch(html += "6)-. No, ¡¡VAYA!! NO has Cumplido tu Promesa de Pulsar 4 Teclas en 5 Segundos.")
        }
        setTimeout(comprobarPromesa, 5000);
    })
    return promesa;
}

async function iniciarPromesa4Teclas()
{
    html += "4)-. Iniciar Promesa de Pulsar 4 Teclas.<br>";
    result.innerHTML = html;
    promesa4Teclas = await prometer4Teclas()
    .then(respuesta=>result.innerHTML = html)
    .catch(respuesta=>result.innerHTML = html)
}