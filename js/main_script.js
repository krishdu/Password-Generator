
const UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 function generatePassword(){
    const passwordLength = document.querySelector("#passwordLength").value;
    if(passwordLength != '' && !isNaN(passwordLength) && passwordLength > 0){
        const isIncludeUppercase = document.querySelector("#isUpperCase").checked;
        const isIncludeLowercase = document.querySelector("#isLowerCase").checked;
        if(isIncludeUppercase || isIncludeLowercase){
            createPassword(passwordLength, isIncludeUppercase, isIncludeLowercase);
        }else{
            displayAlertMessage("Select atleast one constraint!");    
        }
    }else{
        displayAlertMessage("Password Length Invalid!");
    }

 }

 function createPassword(passwordLength, isIncludeUppercase, isIncludeLowercase){
    //console.log(passwordLength, isIncludeUppercase);
    let SUPERSET = [];
    if(isIncludeUppercase)
        SUPERSET = SUPERSET.concat(UPPERCASE);
    if(isIncludeLowercase)
        SUPERSET = SUPERSET.concat(LOWERCASE);
   // console.log(SUPERSET);
    let createdPassword = "";

    for(let i = 0; i < passwordLength; i++){
        let pickedChar = SUPERSET[Math.floor(Math.random() * SUPERSET.length)];
        createdPassword += pickedChar;
    }

    document.querySelector("#generatedPassword").value = createdPassword;
 }

 function displayAlertMessage(msg){
    const message = document.querySelector("#notification");
    message.setAttribute("class", "alert alert-danger text-center");
    message.innerHTML = msg;
 }
