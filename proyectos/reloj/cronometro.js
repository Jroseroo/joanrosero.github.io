/*
//Contador para aumentar el tiempo del cronometro
let tiempoCronometro = 0;
let minutosCronometro = 0;
let segundosCronometro = 0;

function ticTac() {
    //Hacemos aumentar el tiempo del cronometro
    tiempoCronometro++;
    //Igualamos la cantidad de segundos a la cantidad de tiempo del cronometro
    segundosCronometro = tiempoCronometro;
    //Creamos la variable para las horas
    let horasCronometro = 0;
    
    //Si el tiempo del cronometro es mayor a 60 segundos, aumentamos los minutos y reiniciamos los segundos
    if(segundosCronometro === 60 || minutosCronometro === 60){
        minutosCronometro++;
        segundosCronometro = 0;
        horasCronometro++;
        tiempoCronometro = 0;
    }

    //
    let tiempoAMostrar = String(horasCronometro).padStart(2, "0") + ":" + String(minutosCronometro).padStart(2, "0") + ":" + String(segundosCronometro).padStart(2, "0");
    let textoCronometro = document.getElementById('textoCronometro');
    textoCronometro.textContent = tiempoAMostrar;   
}

let btnIniciar = document.getElementById("btnIniciar");
let btnFinalizar = document.getElementById("btnFinalizar");
let intervaloDeTiempo;

function iniciarCronometro() {
   intervaloDeTiempo = setInterval(ticTac, 1000);
   btnIniciar.textContent = "Ejecutando";
}

function pausarCronometro(){
    clearInterval(intervaloDeTiempo);
    btnIniciar.textContent = "Continuar";
}

btnFinalizar.addEventListener("click", function(){
    location.reload()
})
*/
let decoration = document.getElementById("decoration");
let textCronometro = document.getElementById("textoCronometro");
let btnPlay = document.getElementById("btn_play");
let btnPause = document.getElementById("btn_pausa");
let btnStop = document.getElementById("btn_stop");
let cronometro_content = document.getElementById("cronometro_content");
let tiempoCronometro = 0;
let segundos;
let minutos;
let horas;
let intervalo;
function tiempo(){
    tiempoCronometro++;
    segundos = tiempoCronometro % 60;
    minutos = Math.floor(tiempoCronometro / 60) % 60;
    horas = Math.floor(tiempoCronometro / 3600);
    textCronometro.textContent = 
        String(horas).padStart(2, "0") + ":" +
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0");
    
}

function iniciarCronometro(){
    tiempo();
    intervalo = setInterval(tiempo, 1000);
    btnPlay.style.display = "none";
    btnPause.style.display = "block";
    btnStop.style.display = "block";
    decoration.style.animationPlayState = "running";
}

function pausarCronometro(){
    clearInterval(intervalo);
    btnPlay.style.display = "block";
    btnPause.style.display = "none";
    decoration.style.animationPlayState = "paused";
}

function finalizarCronometro(){
    clearInterval(intervalo);
    btnPlay.style.display = "block";
    btnPause.style.display = "none";
    btnStop.style.display = "none";
    decoration.style.animationPlayState = "paused";
    location.reload();
}

btnPlay.addEventListener("click", iniciarCronometro);
btnPause.addEventListener("click", pausarCronometro);
btnStop.addEventListener("click", finalizarCronometro);
//NO FUNCIONA