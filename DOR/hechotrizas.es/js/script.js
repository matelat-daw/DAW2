const DOM =
{
    body: document.body,
    dark: document.getElementById("dark"),
    light: document.getElementById("light")
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // Verifica si El Navegador Soporta MatchMedia y si está Configurado el Modo dark.
{
    changeStyle("dark");
}
else
{
    changeStyle("light");
}

function changeStyle(style) // Cambia los Estilos de la Página, Según se Seleccione en el Selector y Dependoendo de como esté el Switch(Normal/Alto Contraste).
{
    if (style == "dark")
    {
        DOM.light.style.display = "block";
        DOM.dark.style.display = "none";
        DOM.body.className = style;
    }
    else
    {
        DOM.dark.style.display = "block";
        DOM.light.style.display = "none";
        DOM.body.className = style;
    }
}