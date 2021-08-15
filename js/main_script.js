
const UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

 function generatePassword(){
    const passwordLength = document.querySelector("#passwordLength").value;
    if(passwordLength != '' && !isNaN(passwordLength) && passwordLength > 0){
        const isIncludeUppercase = document.querySelector("#isUpperCase").checked;
        if(isIncludeUppercase){
            createPassword(passwordLength);
        }else{
            displayAlertMessage("Select atleast one constraint!");    
        }
    }else{
        displayAlertMessage("Password Length Invalid!");
    }

 }

 function createPassword(passwordLength){
    //console.log(passwordLength, isIncludeUppercase);
    let createdPassword = "";
    for(let i = 0; i < passwordLength; i++){
        let pickedChar = UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
        createdPassword += pickedChar;
    }
    document.querySelector("#generatedPassword").value = createdPassword;
 }

 function displayAlertMessage(msg){
    const message = document.querySelector("#notification");
    message.setAttribute("class", "alert alert-danger text-center");
    message.innerHTML = msg;
 }
