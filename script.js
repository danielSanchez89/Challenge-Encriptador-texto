var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-imagen"); 
var contenedor = document.querySelector(".contenedor-mensaje"); 
var resultado = document.querySelector(".texto-salida"); 


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

// Función encriptar
function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

// Función desencriptar
function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}


function recuperarTexto() {
    var cajatexto = document.querySelector(".entrada-texto"); 
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

// con esta función se realiza la encriptación
function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

// con esta funcion es para realiza la desencriptación
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-salida").textContent; 
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles");
});
