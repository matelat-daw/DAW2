const BORDER = {
    mision: document.getElementById("mision"),
    history: document.getElementById("histo"),
    team: document.getElementById("teams")
}

function checkBorder(element)
{
    switch (element)
    {
        case "mision":
            BORDER.mision.classList.add("here");
            BORDER.history.classList.remove("here");
            BORDER.team.classList.remove("here")
            break;
        case "histo":
            BORDER.history.classList.add("here");
            BORDER.mision.classList.remove("here");
            BORDER.team.classList.remove("here")
            break;
        default:
            BORDER.team.classList.add("here");
            BORDER.history.classList.remove("here");
            BORDER.mision.classList.remove("here")
            break;
    }
}