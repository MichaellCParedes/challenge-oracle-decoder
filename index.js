var btnEncrypt = document.getElementById("btnEncrypt"); 
var btnDecrypt = document.getElementById("btnDecrypt"); 
var btnCopy = document.getElementById("btnCopy");
var text = document.getElementById("txtEncrypt");
var textEncrypted = document.getElementById("txtEncrypted");
var txtArea = document.getElementById("txtEncrypt");

const KEYS_ENCRYPT = {'e':'enter','i':'imes','a':'ai','o':'ober','u':'ufat'};
const KEYS_DECRYPT = {'enter':'e','imes':'i','ai':'a','ober':'o','ufat':'u'};

function displayTxtEncrypted(txtEncrypt){
    let firstDiv = document.getElementById("first-text-encrypted");
    let secondDiv = document.getElementById("second-text-encrypted");
    firstDiv.style.display = "none";
    secondDiv.style.display = "block";

    let pText = document.createTextNode(txtEncrypt);
    textEncrypted.innerHTML = "";
    textEncrypted.appendChild(pText);
}

function validation(txtEncrypt){
    if (/^[a-z\s]+$/.test(txtEncrypt))
        return true;
    return false;
}

btnEncrypt.onclick = function(){
    let textDisplay = text.value;
    if (!validation(textDisplay)) return alert("Sólo letras minúsculas.");
    textDisplay = textDisplay.replace(/[aeiou]/g, m => KEYS_ENCRYPT[m]); 
    displayTxtEncrypted(textDisplay);
}

btnDecrypt.onclick = function(){
    let textDisplay = text.value;
    if (!validation(textDisplay)) return alert("Sólo letras minúsculas.");
    textDisplay = textDisplay.replace(/(enter|imes|ai|ober|ufat)/g, m => KEYS_DECRYPT[m]);
    displayTxtEncrypted(textDisplay);
}

btnCopy.onclick = function(){    
    navigator.clipboard.writeText(textEncrypted.value);
    alert("Se ha copiado el texto correctamente");
}

