//Variables para controlar el juego
let palabraSecreta;
let opcionesPalabras = ["SEXTO", "BESOS", "CASAR", "LINDA", "ABETO", "RAUDO", "GANSO", "MAGIA", "MUNDO", "DULCE", "SILLA", "PERLA", "QUITO", 
                        "VASTO", "TESOR", "FRUTA", "CIELO", "TAREA", "PRISA", "JAULA", "NUBES", "CALMA", "NADIE", "QUIZA", "PIZZA", "QUESO",
                        "MOVIL", "MANDO", "TEXTO", "LUEGO", "NUNCA", "OJALA", "RUIDO", "MAREO", "MARIA", "MARIO", "ELENA", "PAULA", "LAURA", 
                        "MARCO", "MONOS", "MONTE", "FUEGO", "CLIMA", "TOMAR", "CORTA", "LECHE", "BALON","JUEGO", "ALTAR", "ACTOR", "AVION", 
                        "BACHE", "BELEN", "BICHO", "BUENO", "BRISA", "BUSCA", "BABAS", "BAJAR", "CABRA", "CAFES", "CAJAS", "CALAS", "CALLA",
                        "CALLA","CAMPO","CANAS","CARAS","CARLO","CARRO","CASAS","CAIDA","CEJAS","CERCA","CERDO","CHILE","CIEGO","CINES","CLAVO",
                        "COLON","CORRO","COSTO","CRUDO","CURAR","COREA","DADOS","DAGAS","DAÑOS","DEJAR","DENSO","DICES","DIVOS","DOTES","DUNAS",
                        "DURES","DUROS","ELLOS","EDITO","ENOJO","ERROR","FALLO","FALTO","FERIA","FETOS","FIJOS","FILAS","FINCA","GAFAS","GASTO",
                        "GORDO","GORRO","GORRA","GRAVE","GRITO","HASTA","HIELO","INDIA","ISLAS","INFLO","IDEAS","JAPON","JULIO","JERGA","MANIA",
                        "MALON","MENOS","METRO","MOLER","METER","NACER","NARRO","NATAS","NAVES","NECIO","NIÑOS","NIÑAS","NOTAS","OBRAS","OCIOS",
                        "OLLAS","ONDAS","ONZAS","OPERA","OTROS","OVULO","PALAS","PARIS","PEDIR","PELEA","PERAS","PESOS","PILAS","PINTO","PODER",
                        "QATAR","QUEDO","QUEMA","RELOJ","RUBIA","RASCO","RATAS","TARTA","RATOS","REDES","REMAR","RENOS","RENTA","SABIO","SACAR",
                        "SELVA","SANAR","SECAR","SOPAS","SERIO","SOBAR","SUCIO","SIETE","TABLA","TACOS","TAPAS","TELON","TENER","TENIS","TERCO",
                        "TIPOS","TODAS","TORPE","TROTE","VACAS","VAGOS","VALER","VELAS","VEMOS","VAMOS","VIGAS","VERDE","VIVIR","VOLAR","VOTAR",
                        "YATES","YEMAS","YOGUR","ZONAS","ZORRO","ZORDO"];
let intentosMaximos = 5;
let intentos = 0;
let palabraPrueba1 = "";
let palabraPrueba2 = "";
let palabraPrueba3 = "";
let palabraPrueba4 = "";
let palabraPrueba5 = "";
let historialIntentos = [];

//Variables de HTML
let mainSubtitleBienvenida = document.getElementById("main_subtitle_bienvenida");
let mainTitle = document.querySelector(".main_title");
let mainSubtitleIntentos = document.getElementById("main_subtitle_numIntentos");
let mainTitleLose = document.getElementById("main_title_lose");
let mainTitleWin = document.getElementById("main_title_win");
let mainSubtitlePruebaNuevo = document.getElementById("main_subtitle_prueba_nuevo");
let mainPalabraSecreta = document.getElementById("main_palabra_secreta");

let mainBox = document.getElementById("main_box"); 

let boxLetra1 = document.querySelectorAll(".box_letra1");
let boxLetra2 = document.querySelectorAll(".box_letra2");
let boxLetra3 = document.querySelectorAll(".box_letra3");
let boxLetra4 = document.querySelectorAll(".box_letra4");
let boxLetra5 = document.querySelectorAll(".box_letra5");

let primerInput = document.getElementById("primerInput");
let inputBox1 = document.querySelectorAll(".input_box1");
let inputBox2 = document.querySelectorAll(".input_box2");
let inputBox3 = document.querySelectorAll(".input_box3");
let inputBox4 = document.querySelectorAll(".input_box4");
let inputBox5 = document.querySelectorAll(".input_box5");

let inputBoxEnfocado = document.getElementById("input_box_enfocado");
let inputBoxEnfocado2 = document.getElementById("input_box_enfocado2");
let inputBoxEnfocado3 = document.getElementById("input_box_enfocado3");
let inputBoxEnfocado4 = document.getElementById("input_box_enfocado4");
let inputBoxEnfocado5 = document.getElementById("input_box_enfocado5");

let btnJugar = document.getElementById("btn_jugar");
let btnJugarNuevo = document.getElementById("btn_jugar_nuevo");
let btnComprobar1 = document.getElementById("btn_comprobar1");
let btnComprobar2 = document.getElementById("btn_comprobar2");
let btnComprobar3 = document.getElementById("btn_comprobar3");
let btnComprobar4 = document.getElementById("btn_comprobar4");
let btnComprobar5 = document.getElementById("btn_comprobar5");

//FUNCIONES
//OBTENER UNA PALABRA SECRETA
function obtenerPalabraSecreta(){
    let palabraAleatoria = Math.floor(Math.random() * opcionesPalabras.length);
    let textoPalabraAleatoria = opcionesPalabras[palabraAleatoria];
    //console.log("Tu palabra secreta es: " + textoPalabraAleatoria);

    palabraSecreta = textoPalabraAleatoria;
}

obtenerPalabraSecreta();

//Función jugar
function jugar(){
    mainSubtitleIntentos.style.display = "block";
    mainBox.style.display = "flex";
    primerInput.focus();
    btnJugar.style.display = "none";
    btnComprobar1.style.display = "block";
}

btnJugar.addEventListener("click", jugar);

//FUNCIÓN JUGAR DE NUEVO
function jugarNuevo(){
    location.reload();
}

btnJugarNuevo.addEventListener("click", jugarNuevo);

//CONTROL DE LOS INPUTS

//FUNCIÓN MOSTRAR INPUTS
/*
function mostrarInputs(boxLetra){
    for(let i = 0; i < boxLetra.length; i++){
        boxLetra[i].style.display = "flex";
    }
}
*/

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
function avanzarInput1(e){
    for(let i = 0; i < inputBox1.length; i++){
       if(e === inputBox1[i] && i < inputBox1.length -1 && e.value.trim() != ""){  
            inputBox1[i + 1].focus();
       }
    }
}

function avanzarInput2(e){
    for(let i = 0; i < inputBox2.length; i++){
       if(e === inputBox2[i] && i < inputBox2.length -1 && e.value.trim() != ""){  
            inputBox2[i + 1].focus();
       }
    }
}

function avanzarInput2(e){
    for(let i = 0; i < inputBox2.length; i++){
       if(e === inputBox2[i] && i < inputBox2.length -1 && e.value.trim() != ""){  
            inputBox2[i + 1].focus();
       }
    }
}

function avanzarInput3(e){
    for(let i = 0; i < inputBox3.length; i++){
       if(e === inputBox3[i] && i < inputBox3.length -1 && e.value.trim() != ""){  
            inputBox3[i + 1].focus();
       }
    }
}

function avanzarInput4(e){
    for(let i = 0; i < inputBox4.length; i++){
       if(e === inputBox4[i] && i < inputBox4.length -1 && e.value.trim() != ""){  
            inputBox4[i + 1].focus();
       }
    }
}

function avanzarInput5(e){
    for(let i = 0; i < inputBox5.length; i++){
       if(e === inputBox5[i] && i < inputBox5.length -1 && e.value.trim() != ""){  
            inputBox5[i + 1].focus();
       }
    }
}

//RETROCEDER INPUTS
function retrocederInput1(e){
    let inputActual = e.target;
    if(e.key === "Backspace"){
        for(let i = 0; i < inputBox1.length; i++){
            if(inputBox1[i] === inputActual && i > 0 && inputBox1[i].value === ""){
                inputBox1[i - 1].focus();
                inputBox1[i].value = "";
            }
        }
    }
}

for(let i = 0; i < inputBox1.length; i++){
    let input = inputBox1[i];
    input.addEventListener("keydown", retrocederInput1);
}

function retrocederInput2(e){
    let inputActual = e.target;
    if(e.key === "Backspace"){
        for(let i = 0; i < inputBox2.length; i++){
            if(inputBox2[i] === inputActual && i > 0 && inputBox2[i].value === ""){
                inputBox2[i - 1].focus();
                inputBox2[i].value = "";
            }
        }
    }
}

for(let i = 0; i < inputBox2.length; i++){
    let input = inputBox2[i];
    input.addEventListener("keydown", retrocederInput2);
}

function retrocederInput3(e){
    let inputActual = e.target;
    if(e.key === "Backspace"){
        for(let i = 0; i < inputBox3.length; i++){
            if(inputBox3[i] === inputActual && i > 0 && inputBox3[i].value === ""){
                inputBox3[i - 1].focus();
                inputBox3[i].value = "";
            }
        }
    }
}

for(let i = 0; i < inputBox3.length; i++){
    let input = inputBox3[i];
    input.addEventListener("keydown", retrocederInput3);
}

function retrocederInput4(e){
    let inputActual = e.target;
    if(e.key === "Backspace"){
        for(let i = 0; i < inputBox4.length; i++){
            if(inputBox4[i] === inputActual && i > 0 && inputBox4[i].value === ""){
                inputBox4[i - 1].focus();
                inputBox4[i].value = "";
            }
        }
    }
}

for(let i = 0; i < inputBox4.length; i++){
    let input = inputBox4[i];
    input.addEventListener("keydown", retrocederInput4);
}

function retrocederInput5(e){
    let inputActual = e.target;
    if(e.key === "Backspace"){
        for(let i = 0; i < inputBox5.length; i++){
            if(inputBox5[i] === inputActual && i > 0 && inputBox5[i].value === ""){
                inputBox5[i - 1].focus();
                inputBox5[i].value = "";
            }
        }
    }
}

for(let i = 0; i < inputBox5.length; i++){
    let input = inputBox5[i];
    input.addEventListener("keydown", retrocederInput5);
}

//CONSTRUIR PALABRA INTENTO
function construirPalabra1(){
    let palabra = "";
    for(let i = 0; i < inputBox1.length; i++){
            palabra = palabra + inputBox1[i].value;
        
    }if(palabra.length === 5){
        historialIntentos.push(palabra);
        palabraPrueba1 = palabra.trim();
        //console.log("Este ha sido tu intento " + palabraPrueba1);
    }
}

function construirPalabra2(){
    let palabra = "";
    for(let i = 0; i < inputBox2.length; i++){
        palabra = palabra + inputBox2[i].value;
    }if(palabra.length === 5){
        //historialIntentos.push(palabra);
        palabraPrueba2 = palabra.trim();
    //console.log("Este ha sido tu intento " + palabraPrueba2);
    }

}

function construirPalabra3(){
    let palabra = "";
    for(let i = 0; i < inputBox3.length; i++){
        palabra = palabra + inputBox3[i].value;
    }if(palabra.length === 5){
        //historialIntentos.push(palabra);
        palabraPrueba3 = palabra.trim();
        //console.log("Este ha sido tu intento " + palabraPrueba3);
    }
}

function construirPalabra4(){
    let palabra = "";
    for(let i = 0; i < inputBox4.length; i++){
        palabra = palabra + inputBox4[i].value;
    }if(palabra.length === 5){
        //historialIntentos.push(palabra);
        palabraPrueba4 = palabra.trim();
        //console.log("Este ha sido tu intento " + palabraPrueba4);
    }
}

function construirPalabra5(){
    let palabra = "";
    for(let i = 0; i < inputBox5.length; i++){
        palabra = palabra + inputBox5[i].value;
    }if(palabra.length === 5){
        //historialIntentos.push(palabra);
        palabraPrueba5 = palabra.trim();
        //console.log("Este ha sido tu intento " + palabraPrueba5);
    }
}

//CONTAR LETRAS Y AGREGAR COLORES
function contarLetrasYagregarColores1(){
    let contadorSecreto = {};
    let contadorPrueba1 = {};
    let letrasVerdes = [];
    let letrasAmarillas =[];
    //CONTAMOS LETRAS DE LA PALABRA SECRETA
    for(let letra of palabraSecreta){
        contadorSecreto[letra] = (contadorSecreto[letra] || 0) + 1;
    }
    //console.log(contadorSecreto);
    //CONTAMOS LETRAS DE LA PALABRA PRUEBA
    for(let letra of palabraPrueba1){
        contadorPrueba1[letra] = (contadorPrueba1[letra] || 0) + 1;
    }
    //console.log(contadorPrueba1);
    //COMENZAMOS A COMPARAR LETRAS
    for(let i = 0; i < inputBox1.length; i++){
        if(inputBox1[i].value === palabraSecreta[i]){
            letrasVerdes.push(inputBox1[i].value);
            //contadorPrueba1[inputBox1[i].value]--;
            contadorSecreto[inputBox1[i].value]--;
            inputBox1[i].style.backgroundColor = "green";
            inputBox1[i].style.color = "white";
        }
    }
    for(let i = 0; i < inputBox1.length; i++){
        if(inputBox1[i].value !=  palabraSecreta[i] && palabraSecreta.includes(inputBox1[i].value)
             && contadorSecreto[inputBox1[i].value] >0 ){
            letrasAmarillas.push(inputBox1[i].value);
            inputBox1[i].style.backgroundColor = "yellow";
            contadorSecreto[inputBox1[i].value]--;
            //inputBox1[i].style.color = "white";
        }else if(!palabraSecreta.includes(inputBox1[i].value)){
            inputBox1[i].style.backgroundColor = "red";
            inputBox1[i].style.color = "white";
        }
    }
    //console.log(contadorPrueba1);
    //console.log("letras verdes: " + letrasVerdes);
    //console.log("letras amarillas: " + letrasAmarillas);

}

//CONTAR LETRAS Y AGREGAR COLORES
function contarLetrasYagregarColores2(){
    let contadorSecreto = {};
    let contadorPrueba2 = {};
    let letrasVerdes = [];
    let letrasAmarillas =[];
    //CONTAMOS LETRAS DE LA PALABRA SECRETA
    for(let letra of palabraSecreta){
        contadorSecreto[letra] = (contadorSecreto[letra] || 0) + 1;
    }
    //console.log(contadorSecreto);
    //CONTAMOS LETRAS DE LA PALABRA PRUEBA
    for(let letra of palabraPrueba2){
        contadorPrueba2[letra] = (contadorPrueba2[letra] || 0) + 1;
    }
    //console.log(contadorPrueba2);
    //COMENZAMOS A COMPARAR LETRAS
    for(let i = 0; i < inputBox2.length; i++){
        if(inputBox2[i].value === palabraSecreta[i]){
            letrasVerdes.push(inputBox2[i].value);
            //contadorPrueba1[inputBox1[i].value]--;
            contadorSecreto[inputBox2[i].value]--;
            inputBox2[i].style.backgroundColor = "green";
            inputBox2[i].style.color = "white";
        }
    }
    for(let i = 0; i < inputBox2.length; i++){
        if(inputBox2[i].value !=  palabraSecreta[i] && palabraSecreta.includes(inputBox2[i].value)
             && contadorSecreto[inputBox2[i].value] >0 ){
            letrasAmarillas.push(inputBox2[i].value);
            inputBox2[i].style.backgroundColor = "yellow";
            contadorSecreto[inputBox2[i].value]--;
            //inputBox1[i].style.color = "white";
        }else if(!palabraSecreta.includes(inputBox2[i].value)){
            inputBox2[i].style.backgroundColor = "red";
            inputBox2[i].style.color = "white";
        }
    }
    //console.log(contadorPrueba2);
    //console.log("letras verdes: " + letrasVerdes);
    //console.log("letras amarillas: " + letrasAmarillas);

}

//CONTAR LETRAS Y AGREGAR COLORES
function contarLetrasYagregarColores3(){
    let contadorSecreto = {};
    let contadorPrueba3 = {};
    let letrasVerdes = [];
    let letrasAmarillas =[];
    //CONTAMOS LETRAS DE LA PALABRA SECRETA
    for(let letra of palabraSecreta){
        contadorSecreto[letra] = (contadorSecreto[letra] || 0) + 1;
    }
    //console.log(contadorSecreto);
    //CONTAMOS LETRAS DE LA PALABRA PRUEBA
    for(let letra of palabraPrueba3){
        contadorPrueba3[letra] = (contadorPrueba3[letra] || 0) + 1;
    }
    //console.log(contadorPrueba3);
    //COMENZAMOS A COMPARAR LETRAS
    for(let i = 0; i < inputBox3.length; i++){
        if(inputBox3[i].value === palabraSecreta[i]){
            letrasVerdes.push(inputBox3[i].value);
            //contadorPrueba1[inputBox1[i].value]--;
            contadorSecreto[inputBox3[i].value]--;
            inputBox3[i].style.backgroundColor = "green";
            inputBox3[i].style.color = "white";
        }
    }
    for(let i = 0; i < inputBox3.length; i++){
        if(inputBox3[i].value !=  palabraSecreta[i] && palabraSecreta.includes(inputBox3[i].value)
             && contadorSecreto[inputBox3[i].value] >0 ){
            letrasAmarillas.push(inputBox3[i].value);
            inputBox3[i].style.backgroundColor = "yellow";
            contadorSecreto[inputBox3[i].value]--;
            //inputBox1[i].style.color = "white";
        }else if(!palabraSecreta.includes(inputBox3[i].value)){
            inputBox3[i].style.backgroundColor = "red";
            inputBox3[i].style.color = "white";
        }
    }
    //console.log(contadorPrueba3);
    //console.log("letras verdes: " + letrasVerdes);
    //console.log("letras amarillas: " + letrasAmarillas);

}


//CONTAR LETRAS Y AGREGAR COLORES
function contarLetrasYagregarColores4(){
    let contadorSecreto = {};
    let contadorPrueba4 = {};
    let letrasVerdes = [];
    let letrasAmarillas =[];
    //CONTAMOS LETRAS DE LA PALABRA SECRETA
    for(let letra of palabraSecreta){
        contadorSecreto[letra] = (contadorSecreto[letra] || 0) + 1;
    }
    //console.log(contadorSecreto);
    //CONTAMOS LETRAS DE LA PALABRA PRUEBA
    for(let letra of palabraPrueba4){
        contadorPrueba4[letra] = (contadorPrueba4[letra] || 0) + 1;
    }
    //console.log(contadorPrueba4);
    //COMENZAMOS A COMPARAR LETRAS
    for(let i = 0; i < inputBox4.length; i++){
        if(inputBox4[i].value === palabraSecreta[i]){
            letrasVerdes.push(inputBox4[i].value);
            //contadorPrueba1[inputBox1[i].value]--;
            contadorSecreto[inputBox4[i].value]--;
            inputBox4[i].style.backgroundColor = "green";
            inputBox4[i].style.color = "white";
        }
    }
    for(let i = 0; i < inputBox4.length; i++){
        if(inputBox4[i].value !=  palabraSecreta[i] && palabraSecreta.includes(inputBox4[i].value)
             && contadorSecreto[inputBox4[i].value] >0 ){
            letrasAmarillas.push(inputBox4[i].value);
            inputBox4[i].style.backgroundColor = "yellow";
            contadorSecreto[inputBox4[i].value]--;
            //inputBox1[i].style.color = "white";
        }else if(!palabraSecreta.includes(inputBox4[i].value)){
            inputBox4[i].style.backgroundColor = "red";
            inputBox4[i].style.color = "white";
        }
    }
    //console.log(contadorPrueba4);
    //console.log("letras verdes: " + letrasVerdes);
    //console.log("letras amarillas: " + letrasAmarillas);

}


//CONTAR LETRAS Y AGREGAR COLORES
function contarLetrasYagregarColores5(){
    let contadorSecreto = {};
    let contadorPrueba5 = {};
    let letrasVerdes = [];
    let letrasAmarillas =[];
    //CONTAMOS LETRAS DE LA PALABRA SECRETA
    for(let letra of palabraSecreta){
        contadorSecreto[letra] = (contadorSecreto[letra] || 0) + 1;
    }
    //console.log(contadorSecreto);
    //CONTAMOS LETRAS DE LA PALABRA PRUEBA
    for(let letra of palabraPrueba5){
        contadorPrueba5[letra] = (contadorPrueba5[letra] || 0) + 1;
    }
    //console.log(contadorPrueba5);
    //COMENZAMOS A COMPARAR LETRAS
    for(let i = 0; i < inputBox5.length; i++){
        if(inputBox5[i].value === palabraSecreta[i]){
            letrasVerdes.push(inputBox5[i].value);
            //contadorPrueba1[inputBox1[i].value]--;
            contadorSecreto[inputBox5[i].value]--;
            inputBox5[i].style.backgroundColor = "green";
            inputBox5[i].style.color = "white";
        }
    }
    for(let i = 0; i < inputBox5.length; i++){
        if(inputBox5[i].value !=  palabraSecreta[i] && palabraSecreta.includes(inputBox5[i].value)
             && contadorSecreto[inputBox5[i].value] >0 ){
            letrasAmarillas.push(inputBox5[i].value);
            inputBox5[i].style.backgroundColor = "yellow";
            contadorSecreto[inputBox5[i].value]--;
            //inputBox1[i].style.color = "white";
        }
    }
    for(let i = 0; i < inputBox5.length; i++){
        if(!palabraSecreta.includes(inputBox5[i].value)){
            inputBox5[i].style.backgroundColor = "red";
            inputBox5[i].style.color = "white";
        }
    }
    //console.log(contadorPrueba5);
    //console.log("letras verdes: " + letrasVerdes);
    //console.log("letras amarillas: " + letrasAmarillas);

}

//COMPARAR PALABRAS
function compararPalabras1(){
    construirPalabra1();
    if(palabraPrueba1.length === 5){
        
        contarLetrasYagregarColores1();
        if(palabraPrueba1 === palabraSecreta){
        //historialIntentos.push(palabraPrueba1);
        btnComprobar1.style.display = "none";
        mainTitleWin.style.display = "block";
        btnJugarNuevo.style.display = "block";
        }else{
            mainSubtitlePruebaNuevo.style.display = "block";
            //historialIntentos.push(palabraPrueba1);
            //mostrarInputs(boxLetra2);
            inputBoxEnfocado.focus();
            btnComprobar1.style.display ="none";
            btnComprobar2.style.display ="block";
            

            for(let i = 0; i < historialIntentos.length; i++){
                //console.log(historialIntentos[i] + i);
            }

            //inputsEnfoque.focus();
            /*
            for(let i = 0; i < coleccionInputs.length; i++){
                coleccionInputs[i].value = "";
            }*/
        }
    }else{
        primerInput.focus();
        alert("Palabra no valida, Introduzca una palabra de 5 letras");
        for(let i = 0; i < inputBox1.length; i++){
            inputBox1[i].value = "";
            inputBox1[i].style.backgroundColor = "white";
            inputBox1[i].style.color = "black";
            
        }
    }
    
}

btnComprobar1.addEventListener("click", compararPalabras1);

function compararPalabras2(){
    construirPalabra2();
    if(palabraPrueba2.length === 5){
        
        contarLetrasYagregarColores2();
        if(palabraPrueba2 === palabraSecreta){
        //historialIntentos.push(palabraPrueba1);
        btnComprobar2.style.display = "none";
        mainTitleWin.style.display = "block";
        btnJugarNuevo.style.display = "block";
        }else{
            mainSubtitlePruebaNuevo.style.display = "block";
            //historialIntentos.push(palabraPrueba1);
            //mostrarInputs(boxLetra3);
            inputBoxEnfocado2.focus();
            btnComprobar2.style.display ="none";
            btnComprobar3.style.display ="block";
            for(let i = 0; i < historialIntentos.length; i++){
                //console.log(historialIntentos[i] + i);
            }

            //inputsEnfoque.focus();
            /*
            for(let i = 0; i < coleccionInputs.length; i++){
                coleccionInputs[i].value = "";
            }*/
        }
    }else{
        inputBoxEnfocado.focus();
        alert("Palabra no valida, Introduzca una palabra de 5 letras");
        for(let i = 0; i < inputBox2.length; i++){
            inputBox2[i].value = "";
            inputBox2[i].style.backgroundColor = "white";
            inputBox2[i].style.color = "black";
            
        }
    }
}

btnComprobar2.addEventListener("click", compararPalabras2);

function compararPalabras3(){
    construirPalabra3();
    if(palabraPrueba3.length === 5){
        contarLetrasYagregarColores3();
        if(palabraPrueba3 === palabraSecreta){
            historialIntentos.push(palabraPrueba3);
            btnComprobar3.style.display = "none";
            mainTitleWin.style.display = "block";
            mainSubtitlePruebaNuevo.style.display = "none";
            btnJugarNuevo.style.display = "block";
        }else{
            mainSubtitlePruebaNuevo.style.display = "block";
            mainSubtitlePruebaNuevo.textContent = "Sigue intentadolo"
            //historialIntentos.push(palabraPrueba3);
            //mostrarInputs(boxLetra4);
            inputBoxEnfocado3.focus();
            btnComprobar3.style.display = "none";
            btnComprobar4.style.display = "block";
            for(let i = 0; i < historialIntentos.length; i++){
                //console.log(historialIntentos[i] + i);
            }

            //inputsEnfoque.focus();
            /*
            for(let i = 0; i < coleccionInputs.length; i++){
                coleccionInputs[i].value = "";
            }*/
        }
    }else{
        inputBoxEnfocado2.focus();
        alert("Palabra no valida, introduzca una palabra de 5 letras");
        for(let i = 0; i < inputBox3.length; i++){
            inputBox3[i].value ="";
            inputBox3[i].style.backgroundColor = "white";
            inputBox3[i].style.color = "black";
        }
    }
}

btnComprobar3.addEventListener("click", compararPalabras3);

function compararPalabras4(){
    construirPalabra4();
    if(palabraPrueba4.length === 5){
        contarLetrasYagregarColores4();
        if(palabraPrueba4 === palabraSecreta){
            historialIntentos.push(palabraPrueba4);
            btnComprobar4.style.display = "none";
            mainTitleWin.style.display = "block";
            mainSubtitlePruebaNuevo.style.display = "none";
            btnJugarNuevo.style.display = "block";
        }else{
            mainSubtitlePruebaNuevo.style.display = "block";
            mainSubtitlePruebaNuevo.textContent = "Última oportunidad"
            historialIntentos.push(palabraPrueba4);
            //mostrarInputs(boxLetra5);
            inputBoxEnfocado4.focus();
            btnComprobar4.style.display = "none";
            btnComprobar5.style.display = "block";
            for(let i = 0; i < historialIntentos.length; i++){
                //console.log(historialIntentos[i] + i);
            }

            //inputsEnfoque.focus();
            /*
            for(let i = 0; i < coleccionInputs.length; i++){
                coleccionInputs[i].value = "";
            }*/
        }
    }else{
        inputBoxEnfocado3.focus();
        alert("Palabra no valida, introduzca una palabra de 5 letras");
        for(let i = 0; i < inputBox4.length; i++){
            inputBox4[i].value ="";
            inputBox4[i].style.backgroundColor = "white";
            inputBox4[i].style.color = "black";
        }
    }
}

btnComprobar4.addEventListener("click", compararPalabras4);

function compararPalabras5(){
    construirPalabra5();
    if(palabraPrueba5.length === 5){
        contarLetrasYagregarColores5();
    
        if(palabraPrueba5 === palabraSecreta){
            historialIntentos.push(palabraPrueba5);
            btnComprobar5.style.display = "none";
            btnJugarNuevo.style.display = "block";
            mainTitleWin.style.display = "block";
            mainSubtitlePruebaNuevo.style.display = "none";
        }else{
            mainSubtitlePruebaNuevo.style.display = "none";
            mainTitleLose.style.display = "block";
            mainSubtitleIntentos.style.display = "none";
            let textSecreto = "La palabra secreta era: " + palabraSecreta;
            mainPalabraSecreta.innerHTML = textSecreto;
            //historialIntentos.push(palabraPrueba4);
            btnJugarNuevo.style.display = "block";
            btnComprobar5.style.display = "none";
            //inputBoxEnfocado4.focus();
            for(let i = 0; i < historialIntentos.length; i++){
                //console.log(historialIntentos[i] + i);
            }

            //inputsEnfoque.focus();
            /*
            for(let i = 0; i < coleccionInputs.length; i++){
                coleccionInputs[i].value = "";
            }*/
        }
    }else{
        inputBoxEnfocado4.focus();
        alert("Palabra no valida, introduzca una palabra de 5 letras");
        for(let i = 0; i < inputBox5.length; i++){
            inputBox5[i].value ="";
            inputBox5[i].style.backgroundColor = "white";
            inputBox5[i].style.color = "black";
        }
    }
}

btnComprobar5.addEventListener("click", compararPalabras5);