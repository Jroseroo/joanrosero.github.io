//Página inicio
let tiempoActual;

function mostrarHora(){
    tiempoActual = setInterval(crearHora, 1000);
}

function crearHora(){
    let elementoHora = document.getElementById('elementoHora');
    let myFecha = new Date();
    let misHoras = String(myFecha.getHours()).padStart(2, "0");
    let misMinutos = String(myFecha.getMinutes()).padStart(2, "0");
    let misSegundos = String(myFecha.getSeconds()).padStart(2, "0");

    let horaMostrada = misHoras + ":" + misMinutos + ":" + misSegundos;

    elementoHora.textContent = horaMostrada;
}

function crearFecha(){
    let elementoFecha = document.getElementById('elementoFecha');
    let miFecha = new Date();
    let miDia = String(miFecha.getDate()).padStart(2, "0");
    let miMes = String(miFecha.getMonth() + 1).padStart(2, "0"); // Los meses comienzan en 0
    let miYear = miFecha.getFullYear();
    let fechaMostrada = miDia + "/" + miMes + "/" + miYear;
    elementoFecha.textContent = fechaMostrada;
}
