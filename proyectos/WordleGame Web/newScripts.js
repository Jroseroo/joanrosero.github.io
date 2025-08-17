//Variables para controlar el juego
let palabraSecreta = "JAULA";
let intentosMaximos = 5;
let intentos = 0;
let palabraPrueba = "";
let historialIntentos = [];

//Variables HTML
let mainSubtitleNumIntentos = document.getElementById("main_subtitle_numIntentos");
let mainSubtitleBienvenida = document.getElementById("main_subtitle_bienvenida");
let mainSubtitlePruebaNuevo = document.getElementById("main_subtitle_prueba_nuevo");

let mainBox =document.getElementById("main_box");

let coleccionInputs = document.querySelectorAll(".input_box");
let primerInput = document.getElementById("primerInput");
let inputsEnfoque = document.getElementById("input_box_enfocado");
let inputEnfoque2 = document.getElementById("input_box_enfocado2");
let inputEnfoque3 = document.getElementById("input_box_enfocado3");
let inputEnfoque4 = document.getElementById("input_box_enfocado4");

let btnJugar = document.getElementById("btn_jugar");
let btnComprobar = document.getElementById("btn_comprobar1");

//Comenzar partida

function jugarPartida(){
    mainSubtitleBienvenida.style.display = "none";
    mainSubtitleNumIntentos.style.display = "block";
    btnJugar.style.display = "none";
    btnComprobar.style.display = "block";
    mainBox.style.display = "flex";
    primerInput.focus();
}

btnJugar.addEventListener("click", jugarPartida);

//CONTROL DE LOS INPUTS

//Solo permitir letras
function soloLetras(e){
    let letrasValidas = ["A", "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        if(letrasValidas.includes(e.key) || e.key === "Backspace" || e.key === "Enter"){
            //console.log("letra valida");
        }else{
            console.log("letra NO valida");
            e.preventDefault();
        }

}

//Solo letras mayusculas
function letrasMayusculas(e){
    e.value = e.value.toUpperCase();
}


//Avanzar de input
function avanzarInput(e){
    for(let i = 0; i < coleccionInputs.length; i++){
       if(e === coleccionInputs[i] && i < 4 && e.value.trim() != ""){  
            encontrarInput();
            coleccionInputs[i + 1].focus();
       }
       if(e === coleccionInputs[i] && i >= 5 && i < 9 && e.value.trim() != ""){   
            coleccionInputs[i + 1].focus();
       }
       if(e === coleccionInputs[i] && i >= 10 && i < 14 && e.value.trim() != ""){   
            coleccionInputs[i + 1].focus();
       }
       if(e === coleccionInputs[i] && i >= 15 && i < 19 && e.value.trim() != ""){   
            coleccionInputs[i + 1].focus();
       }
    }
}


//Retroceder input
function retrocederInput(e){
    let inputActual = e.target;
    if(e.key === "Backspace"){
        for(let i = 0; i < coleccionInputs.length; i++){
            if(coleccionInputs[i] === inputActual && i > 0 && coleccionInputs[i].value === ""){
                coleccionInputs[i - 1].focus();
                coleccionInputs[i].value = "";
            }
        }
    }
}

for(let i = 0; i < coleccionInputs.length; i++){
    let input = coleccionInputs[i];
    input.addEventListener("keydown", retrocederInput);
}

//Encontrar Input && Salto de linea
let inputActivo = null;
    coleccionInputs.forEach(input =>{
        input.addEventListener("focus", () => {
            inputActivo = input;
        })
    })

function encontrarInput(){

    if(inputActivo.id === "ultimo_input"){
        inputsEnfoque.focus();
    }

    if(inputActivo.id === "ultimo_input2"){
        inputEnfoque2.focus();
    }

    if(inputActivo.id === "ultimo_input3"){
        inputEnfoque3.focus();
    }
    if(inputActivo.id === "ultimo_input4"){
        inputEnfoque4.focus();
    }
}


//CONSTRUIR PALABRA INTENTO
function construirPalabra(){
    let palabra = "";
    for(let i = 0; i < coleccionInputs.length; i++){
        palabra = palabra + coleccionInputs[i].value;
    }
    historialIntentos.push(palabra);
    palabraPrueba = palabra.trim();
    console.log("Este ha sido tu intento " + palabraPrueba);
    palabra ="";
    palabraPrueba = "";
}

//Comparar palabras
function compararPalabras(){
    construirPalabra();
    if(palabraPrueba === palabraSecreta){
        alert("Has acertado");
        historialIntentos.push(palabraPrueba);
    }else{
        mainSubtitlePruebaNuevo.style.display = "block";
        historialIntentos.push(palabraPrueba);
        for(let i = 0; i < historialIntentos.length; i++){
            //console.log(historialIntentos[i] + i);
        }
        encontrarInput();
        //inputsEnfoque.focus();
        /*
        for(let i = 0; i < coleccionInputs.length; i++){
            coleccionInputs[i].value = "";
        }*/
    }
}

btnComprobar.addEventListener("click", compararPalabras);