// export function ciclo(){
function ciclo(){
    return "CFGS de Desarrollo Web"
}

function curso(){
    return "Primer curso"
}

function asignatura(){
    return "Desarrollo web en entorno cliente"
}

export default ciclo; // Exportación Post Declaración, Default va sin llaves, si no son default van entre {}.
export {curso, asignatura as modulo}; // Exporta curso y asignatura con un alias y hay que importarlo con el nombre del alias.