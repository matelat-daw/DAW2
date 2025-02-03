const DOM = {
    body: document.body,
    main: document.getElementById("main"),
    select: document.getElementById("style"),
    mode: document.getElementById("mode"),
    article: document.getElementById("article"),
    dark: document.getElementById("darkMode"),
    light: document.getElementById("lightMode")
};

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // Verifica si El Navegador Soporta MatchMedia y si está Configurado el Modo dark.
{
    changeStyle("dark", "default");
}
else
{
    changeStyle("light", "default");
}

function changeStyle(style, where) // Cambia los Estilos de la Página, Según se Seleccione en el Selector y Dependoendo de como esté el Switch(Normal/Alto Contraste).
{
    if (localStorage.getItem("style") != null)
    {
        let mode = localStorage.getItem("style");
        if (where == "default")
        {
            styleIt(mode);
        }
        else
        {
            styleIt(style);
        }
    }
    else
    {
        styleIt(style);
    }
}

function styleIt(style)
{
    if (style == "dark")
    {
        if (DOM.article != null)
            DOM.article.src = "../media/imgs/kiwi-dark.jpg";
        DOM.light.style.display = "block";
        DOM.dark.style.display = "none";
        DOM.body.className = style;
    }
    else
    {
        if (DOM.article != null)
            DOM.article.src = "../media/imgs/kiwi.jpg";
        DOM.dark.style.display = "block";
        DOM.light.style.display = "none";
        DOM.body.className = style;
    }
    localStorage.setItem("style", style);
}

if (localStorage.getItem("fontSize") != null)
{
    DOM.body.style.fontSize = localStorage.getItem("fontSize");
}
else
{
    localStorage.setItem("index", "2");
}

const fontSizes = ["small", "medium", "large", "x-large", "xx-large"];

function changeSize(how)
{
    let style = window.getComputedStyle(DOM.body, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);

    if (localStorage.getItem("fontSize") != null)
    {
        let size = parseInt(localStorage.getItem("index"));

        if (how == "up")
        {
            localStorage.setItem("index", ++size);
            if (localStorage.getItem("index") <= 4)
            {
                DOM.body.style.fontSize = fontSizes[localStorage.getItem("index")];
                localStorage.setItem("fontSize", fontSizes[localStorage.getItem("index")]);
            }
            else
            {
                localStorage.setItem("index", --size);
            }
        }
        else
        {
            localStorage.setItem("index", --size);
            if (size >= 0)
            {
                DOM.body.style.fontSize = fontSizes[localStorage.getItem("index")];
                localStorage.setItem("fontSize", fontSizes[localStorage.getItem("index")]);
            }
            else
            {
                localStorage.setItem("index", ++size);
            }
        }
    }
    else
    {
        localStorage.setItem("fontSize", "large");
        changeSize(how);
    }
}

function visit(url)
{
    window.open(url, "_self");
}

function checkout(url)
{
    window.open(url, "_self")
}