const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("passOne");
passwordOne.value = ""
let passwordTwo = document.getElementById("passTwo");
passwordTwo.value = ""


function createPasswords() {
    let pass1 = '';
    for (let i = 0; i < 15; i += 1) {
    let randomCharacter = Math.floor(Math.random() * characters.length )
    pass1 += (characters[randomCharacter])
     }
    passwordOne.innerText += pass1
    passwordOne.value = pass1
    let pass2 = '';
    for (let i = 0; i < 15; i += 1) {
    let randomCharacter = Math.floor(Math.random() * characters.length )
    pass2 += (characters[randomCharacter])
     }
    passwordTwo.innerText += pass2
    passwordTwo.value = pass2
}

document.getElementById("passOne").onclick = function() {
    this.select();
    document.execCommand('copy');
}

document.getElementById("passTwo").onclick = function() {
    this.select();
    document.execCommand('copy');
}





