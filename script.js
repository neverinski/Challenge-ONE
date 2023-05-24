const inputMensaje = document.querySelector(".inputMensaje");
const outputMensaje = document.querySelector(".outputMensaje");

function encriptar(textoEncriptar){
    let matrizCodigo = [["e", "enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]];
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoEncriptar.includes(matrizCodigo[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncriptar;
}

function desencriptar(textoDesencriptar){
    let matrizCodigo = [["e", "enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]];
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoDesencriptar.includes(matrizCodigo[i][1])){
            textoDesencriptar = textoDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptar;
}

function botonEncriptar(){
    const textoEncriptado = encriptar(inputMensaje.value);
    outputMensaje.value = textoEncriptado;
    inputMensaje.value = "";
    outputMensaje.style.backgroundImage = "none";
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputMensaje.value);
    outputMensaje.value = textoDesencriptado;
    inputMensaje.value = "";
    outputMensaje.style.backgroundImage = "none";
}

function copiar(){
    let textoCopiado = outputMensaje;
    textoCopiado.select();
    document.execCommand("copy");
    outputMensaje.value = "";
}


