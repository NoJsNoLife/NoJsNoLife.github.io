const form = document.querySelector("form")
const encriptar = document.querySelector("#encriptar")
const desencriptar = document.querySelector("#desencriptar")
const copiar = document.querySelector("#copiar")
const msj = document.querySelector("#msj")
const img = document.querySelector("#img")

encriptar.addEventListener("click", (e) => {
    e.preventDefault()
    let texto = document.querySelector('textarea').value
    encriptarTexto(texto)
})
desencriptar.addEventListener("click", (e) => {
    e.preventDefault()
    let texto = document.querySelector('textarea').value
    desencriptarTexto(texto)
})
copiar.addEventListener("click", (e) => {
    e.preventDefault()
    let texto = document.getElementById("textcontent").innerHTML
    console.log(texto)
    navigator.clipboard.writeText(texto)
    copiar.innerHTML = "Copiado!";
    setTimeout( function() {
        copiar.innerHTML = "Copiar!";
    }, 1000);
})

function encriptarTexto(texto = "") {

    texto = texto.replaceAll("e", "enter")
    texto = texto.replaceAll("i", "imes")
    texto = texto.replaceAll("a", "ai")
    texto = texto.replaceAll("o", "ober")
    texto = texto.replaceAll("u", "ufat")

    return showMsg(texto)
}

function desencriptarTexto(texto = "") {

    texto = texto.replaceAll("enter", "e")
    texto = texto.replaceAll("imes", "i")
    texto = texto.replaceAll("ai", "a")
    texto = texto.replaceAll("ober", "o")
    texto = texto.replaceAll("ufat", "u")

    return showMsg(texto)
}

function showMsg(texto){
    if(texto == null || texto == ""){
        img.style.display = "inline"

    } else {
        img.style.display = "none"
        document.getElementById("textmsg").innerHTML = "Tu mensaje es:"
        document.getElementById("textcontent").innerHTML = texto
    }
}

