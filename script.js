let cabecera = document.getElementById("cabecera");

let cabeceraMenu = document.getElementById("cabeceraMenu");

let tituloHeader = document.getElementById("tituloHeader");

let cabezeraLista = document.getElementById("cabezeraLista");

let elementosListas = document.querySelectorAll(".elemento_lista");

let linkLista = document.querySelectorAll(".link_lista");

let iconoMenu = document.getElementById("iconoMenu");


function aplicarClase(coleccion, claseAntigua, claseNueva){
    for(let i = 0; i < coleccion.length; i++){
        coleccion[i].classList.remove(claseAntigua);
        coleccion[i].classList.add(claseNueva);
    }
}

function mostrarMenu(){
    /*
    cabecera.classList.remove("cabezera");
    cabecera.classList.add("cabezera_mostrar");
*/
    cabeceraMenu.classList.remove("cabezera_menu");
    cabeceraMenu.classList.add("cabezera_menu_mostrar");

    cabezeraLista.style.display = "flex";
    cabezeraLista.classList.remove("cabezera_lista");
    cabezeraLista.classList.add("cabezera_lista_mostrar");

    //tituloHeader.style.display = "none";

    aplicarClase(elementosListas, "elemento_lista", "elemento_lista_mostrar");

    aplicarClase(linkLista, "link_lista", "link_lista_mostrar");

    iconoMenu.style.display = "none";
}

iconoMenu.addEventListener("click", mostrarMenu);



function cerrarMenu(){

    cabeceraMenu.classList.remove("cabezera_menu_mostrar");
    cabeceraMenu.classList.add("cabezera_menu");
    
    cabezeraLista.classList.remove("cabezera_lista_mostrar");
    cabezeraLista.classList.add("cabezera_lista_ocultar");

    tituloHeader.style.display = "";

    iconoMenu.style.display = "";
}

function aplicarMetodo(coleccion, metodo){
    for(let i = 0; i < coleccion.length; i++){
        coleccion[i].addEventListener("click", cerrarMenu);
    }
}

// Cuando termine la animación de cerrar, quitamos la clase y ocultamos del todo
cabezeraLista.addEventListener("animationend", (e) => {
    if (e.animationName === "cerrar") {
        cabezeraLista.classList.remove("cabezera_lista_ocultar");
        cabezeraLista.classList.add("cabezera_lista"); // vuelve a estado inicial
        cabezeraLista.style.display = "none"; // por si quieres que desaparezca del flujo
    }
});


aplicarMetodo(linkLista, cerrarMenu);