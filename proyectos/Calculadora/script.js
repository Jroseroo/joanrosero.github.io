/*
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");
*/

let botones = document.querySelectorAll(".botones");
let btnCalcular = document.getElementById("igual");
let textCalculos = document.getElementById("text_calculos");
let textCalculosActualizado;
/*
    Tengo que crear una función que comprueba cual es el valor del botón que ha pulsado el usuario
y operar en función del tipo de botón pulsado.
*/


    botones.forEach(boton =>
        boton.addEventListener("click",()=>{
                
                let botonPulsado = boton.textContent;
                /*
                    textCalculos.textContent += botonPulsado;
                */
                if(botonPulsado === "AC"){
                    textCalculos.value = "";
                }
                else if(textCalculos.value === "" && botonPulsado === "."){
                    textCalculos.value = "0.";
                }
                
                else if(botonPulsado === "+/-"){
                    textCalculos.value = "(-" + textCalculos.value + ")";
                }
                else if(botonPulsado === "X"){
                    textCalculos.value += "*";
                }

                else if(botonPulsado === "="){
                    //Eval realiza una operación matematica con el contenido del string
                    try{
                        //replace se utiliza para replacar valores de una cadena alfanúmerica
                        //el primer valor es que el queremos quitar, el segundo el que nuevo valor a asignar
                        // si introducimos el valor a cambiar entre //g indicamos que se quiten todos los elementos con ese valor.
                        textCalculos.value =eval(textCalculos.value.replace(/%/g, "/100"))
                    }catch{
                        textCalculos.value = "Error"
                    }
                }

                else{
                    textCalculos.value += botonPulsado;
                }
            }
        )
    )

    textCalculos.addEventListener("change", ()=>{
        textCalculosActualizado = textCalculos.value;
        //alert(textCalculosActualizado) 
        return textCalculosActualizado;
    })

    btnCalcular.addEventListener("click", ()=>{
        //Eval realiza una operación matematica con el contenido del string
                   
            try{textCalculos.value =eval(textCalculos.value)
            }catch{
                textCalculos.value = "Error"
            }
    })

    function teclaEnter(event){
        if(event.keyCode === 13){
            try{textCalculos.value =eval(textCalculos.value)
            }catch{
                textCalculos.value = "Error"
            }
        }
    }

    textCalculos.addEventListener("keydown", teclaEnter);