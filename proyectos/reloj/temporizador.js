//Página Temporizador

//Variables
let inputHoras = document.getElementById("horas");
let inputMinutos = document.getElementById("minutos");
let inputSegundos = document.getElementById("segundos");
let textContador = document.getElementById("textContador");
let btnIniciar = document.getElementById("btnIniciarTemporizador");
let btnDetener = document.getElementById("btnDetenerTemporizador");
let btnRestablecer = document.getElementById("btnRestablecerTemporizador");
let btnDetenerAlarma = document.getElementById("btnDetenerAlarma");
let selectorSonido = document.getElementById('selectorSonido');
let sonidoAlarma = document.getElementById("sonidoAlarma");
let source = sonidoAlarma.querySelector('source');
let selectorSonido_section = document.getElementById("selectorSonido_section")
//Prueba de sonido

selectorSonido.addEventListener('change', () => {
    let nuevoSonido = selectorSonido.value;
    source.src = nuevoSonido;
    sonidoAlarma.load(); // Carga el nuevo sonido, el usuario da play si quiere escucharlo
});



//Funciones
function iniciarTemporizador(){

    //restarTiempo();
    contador = setInterval(restarTiempo, 1000);
    selectorSonido_section.style.display = "none"; // Oculta el selector de sonido al iniciar el temporizador
    /*
    let textoHoras = inputHoras.value * 3600;
    let textoMinutos = inputMinutos.value * 60;
    let textoSegundos = inputSegundos.value * 1;
    //alert("El temporizador se ha iniciado" + " horas establecidas " + textoHoras);
    */
    btnIniciar.style.display = "none";
    btnDetener.style.display = "block";
    btnRestablecer.style.display = "block";

    
}

function restarTiempo(){
    let tiempoSegundos = inputSegundos.value;
    let tiempoMinutos = inputMinutos.value;
    let tiempoHoras = inputHoras.value;

    let tiempoTotal = Number(tiempoHoras * 3600) + Number(tiempoMinutos * 60) + Number(tiempoSegundos * 1);
    let tiempoRestante = tiempoTotal - 1;
    let horasRestantes = Math.floor(tiempoRestante / 3600);
    let minutosRestantes = Math.floor((tiempoRestante % 3600) / 60);
    let segundosRestantes = tiempoRestante % 60;

    inputHoras.value = String(horasRestantes).padStart(2, "0");
    inputMinutos.value = String(minutosRestantes).padStart(2, "0");
    inputSegundos.value = String(segundosRestantes).padStart(2, "0");



    if(tiempoTotal < 1){
        finTemporizador(); // Llama a la función para finalizar el temporizador
    }
    
}

function finTemporizador(){
    clearInterval(contador); // Detiene el temporizador
    sonidoAlarma.play(); // Reproduce el sonido de alarma
    btnIniciar.style.display = "none";
    btnDetener.style.display = "none";
    btnRestablecer.style.display = "none";
    btnDetenerAlarma.style.display = "block"; // Muestra el botón para detener la alarma
    inputHoras.value = "00";
    inputMinutos.value = "00";
    inputSegundos.value = "00";
    
}

function restablecerTemporizador(){
    location.reload(); // Borra el localStorage
}


function pausarTemporizador(){
    clearInterval(contador); // Detiene el temporizador
    btnDetener.style.display = "none";
    btnIniciar.style.display = "block";
    
}

function detenerAlarma(){
location.reload(); // Borra el localStorage
}




/*
let btnIniciarTemporizador = document.getElementById("btnIniciarTemporizador");

let textoTemporizador = document.getElementById("textoTemporizador");

let tiempoTemporizador;
let tiempoId;


let audio = document.getElementById("sonidoTemporizador")

function iniciarTemporizador(){
 let horasTemporizador = document.getElementById("horasTemporizadorInput");
 let minutosTemporizador = document.getElementById("minutosTemporizadorInput");
 let segundosTemporizador = document.getElementById("segundosTemporizadorInput");

 tiempoTemporizador = Number(horasTemporizador.value * 3600) + Number(minutosTemporizador.value * 60) + Number(segundosTemporizador.value)

 tiempoId = setInterval(actualizarTemporizador, 1000);

 textoTemporizador.textContent = "El temporizador se ha iniciado";
 btnIniciarTemporizador.textContent = "Ejecutando";

 setTimeout(finTemporizador, tiempoTemporizador * 1000);

}

function actualizarTemporizador(){
    if(tiempoTemporizador > 0){

        tiempoTemporizador--;

        let horas = Math.floor(tiempoTemporizador / 3600);
        let minutos = Math.floor((tiempoTemporizador % 3600) / 60);
        let segundos = tiempoTemporizador % 60;

        document.getElementById("horasTemporizadorInput").value = String(horas).padStart(2, "0");
        document.getElementById("minutosTemporizadorInput").value = String(minutos).padStart(2, "0");
        document.getElementById("segundosTemporizadorInput").value = String(segundos).padStart(2, "0");
        
    }else{
        detenerTemporizador();
        restablecerTemporizador();
    }
}

function finTemporizador(){
    if(tiempoTemporizador < 1){
        textoTemporizador.textContent = "El temporizador ha finalizado"
        textoTemporizador.style.color = "red";
        audio.loop = true;
        audio.play();
    }

    else{
        detenerTemporizador();
        restablecerTemporizador();
    }
        
}




function detenerTemporizador(){
    let audio = document.getElementById("sonidoTemporizador");
    clearInterval(tiempoId);
    btnIniciarTemporizador.textContent = "Reanudar";
    textoTemporizador.textContent = "El temporizador está pausado"
    audio.pause();
}

function restablecerTemporizador(){
    location.reload();
}
*/


