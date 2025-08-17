
//Página alarma
let inputhoras = document.getElementById('horas');
let inputminutos = document.getElementById('minutos');
let btnEstablecerAlarma = document.getElementById('btnEstablecer');
let btnDetener = document.getElementById('btnDetener');
let sonidoAlarma = document.getElementById('sonidoAlarma');

//Prueba de sonido
const selectorSonido = document.getElementById('selectorSonido');
const audio = document.getElementById('sonidoAlarma');
const source = audio.querySelector('source');

selectorSonido.addEventListener('change', () => {
    const nuevoSonido = selectorSonido.value;
    source.src = nuevoSonido;
    audio.load(); // Carga el nuevo sonido, el usuario da play si quiere escucharlo
});


function establecerAlarma(){
    let horaEstablecida = inputhoras.value;
    let minutosEstablecidos = String(inputminutos.value);
    let horaFijada = String(horaEstablecida + ":"+  minutosEstablecidos);
    let divSonido = document.getElementById('zona_sonido');
    let textoAlarma = document.getElementById('textProgramado');

    divSonido.style.display = "none";
    setInterval(function(){
        let tiempo = new Date();
        let horas = tiempo.getHours();
        let textHoras = String(horas).padStart(2, "0");
        let minutos = tiempo.getMinutes();
        let textMinutos = String(minutos).padStart(2, "0");
        let horaAlarma = String(textHoras + ":" + textMinutos);
        btnEstablecerAlarma.style.display = "none";
        /*if(horaFijada <= horaAlarma){
            alert("Hora no valida, la alarma no puede ser menor a la hora actual.");
            inputhoras.value = "00";
        }*/
        textoAlarma.textContent = "Alarma programada para " + horaFijada;
        
        if(horaFijada === horaAlarma){
            sonidoAlarma.play();
            btnDetener.style.display = "block";
            textoAlarma.textContent = "";
        }else{
            console.log("¡ALARMA NO SONANDO!");
        }

    }, 1000);

}

function ejecutarAlarma(){
    setInterval(establecerAlarma, 1000);
}

btnEstablecerAlarma.addEventListener('click', ejecutarAlarma);

function detenerAlarma(){
    location.reload();
}
