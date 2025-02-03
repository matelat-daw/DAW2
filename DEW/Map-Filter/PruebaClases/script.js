/*Funcion 1*/
function fun1() {
    let ul = lis1;
    let arr = ["Uno","Dos","Tres","Cuatro"];
    arr.forEach(item => {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

/*Funcion 2*/
function fun2() {
    let div = div2;

    /*Añadir por delante*/
    let delante = document.createElement("p");
    delante.textContent = "Frase before";
    delante.classList.toggle("fondo_rojo");
    div.before(delante);

    /*Añadir el primero*/
    let primero = document.createElement("p");
    primero.textContent = "Frase prepend";
    primero.classList.toggle("fondo_rojo");
    div.prepend(primero);

    /*Añadir el último*/
    let final = document.createElement("p");
    final.textContent = "Frase append";
    final.classList.toggle("fondo_rojo");
    div.appendChild(final);

    /*Añadir por detrás*/
    let detras = document.createElement("p");
    detras.textContent = "Frase after";
    detras.classList.toggle("fondo_rojo");
    div.after(detras);

    detras.insertAdjacentElement(bef)
}

/*Funciones 3 (insertAdjacentElement)*/
function fun3_bb() {
    div3.insertAdjacentElement("beforebegin", pMov);
    //div3.before(pMov);        <--- Esto hace lo mismo
}
function fun3_ab() {
    div3.insertAdjacentElement("afterbegin", pMov);
    //div3.prepend(pMov);       <--- Esto hace lo mismo
}
function fun3_be() {
    div3.insertAdjacentElement("beforeend", pMov);
    //div3.append(pMov);        <--- Esto hace lo mismo
    //div3.appendChild(pMov);   <--- Esto hace lo mismo
}
function fun3_ae() {
    div3.insertAdjacentElement("afterend", pMov);
    //div3.after(pMov);         <--- Esto hace lo mismo
}

/*Funciones 4*/
function fun4() {
    div4.removeChild(pEliminar);
}

/*Funciones 5*/
function fun5() {
    JiJa.innerHTML = ">:3";
}

/*Function 6*/
function fun6() {
    let terceraPosicion = div6.children[2];
    let newP = document.createElement("p");
    newP.textContent = "Soy nuevo ;b";
    newP.classList.add("fondo_rojo");
    div6.insertBefore(newP, terceraPosicion);
}

/*Funcion 7 */
function fun7() {
    let newP = document.createElement("p");
    newP.textContent = "Te he sustituido >:D";
    newP.classList.add("fondo_rojo");
    let newP2 = document.createElement("p");
    newP2.textContent = "Yo también >:D";
    newP2.classList.add("fondo_amarillo");
    let item = div7.children[2];
    item.replaceWith(newP, newP2);
}