function muñecoBye(text) {
    if (text.length != 0) {
        document.querySelector(".caja-imagen").style.display = "none";
    } else{
        document.querySelector(".caja-imagen").style.display = "inline";
    }}
    

function encriptar() {
    var frase = document.getElementById("caja-texto").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    muñecoBye(textoEncriptado);
    
    document.getElementById("texto-encriptado").innerHTML = textoEncriptado;

}

function desencriptar() {
    var frase = document.getElementById("caja-texto").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    muñecoBye(textoEncriptado);

    document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
}

function copiar() {
    var contenido = document.querySelector("#texto-encriptado");

    contenido.select();
    document.execCommand("copy");
}

function borrar() {
    document.getElementById("caja-texto").innerHTML = "";
    document.querySelector(".fake-textarea").innerHTML = "";
    document.getElementById("texto-encriptado").innerHTML = "";
    document.querySelector(".fake-textarea").focus();
    document.querySelector(".caja-imagen").style.display = "block";
}

