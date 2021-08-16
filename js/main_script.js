
const UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];
const SYMBOLS = ["!","@","#","$","%","^","&","*",")","(","[","]","{","}","_","?"];

 function generatePassword(){
    const passwordLength = document.querySelector("#passwordLength").value;
    if(passwordLength != '' && !isNaN(passwordLength) && passwordLength > 0){
        const isIncludeUppercase = document.querySelector("#isUpperCase").checked;
        const isIncludeLowercase = document.querySelector("#isLowerCase").checked;
        const isIncludeNumber = document.querySelector("#isNumber").checked;
        const isIncludeSymbol = document.querySelector("#isSymbol").checked;
        if(isIncludeUppercase || isIncludeLowercase ||isIncludeNumber || isIncludeSymbol){
            createPassword(passwordLength, isIncludeUppercase, isIncludeLowercase, isIncludeNumber, isIncludeSymbol);
        }else{
            displayAlertMessage("Select atleast one constraint!");    
        }
    }else{
        displayAlertMessage("Password Length Invalid!");
    }

 }

 function createPassword(passwordLength, isIncludeUppercase, isIncludeLowercase, isIncludeNumber, isIncludeSymbol){
    //console.log(passwordLength, isIncludeUppercase);
    let SUPERSET = [];
    if(isIncludeUppercase)
        SUPERSET = SUPERSET.concat(UPPERCASE);
    if(isIncludeLowercase)
        SUPERSET = SUPERSET.concat(LOWERCASE);
    if(isIncludeNumber)
        SUPERSET = SUPERSET.concat(NUMBERS);    
    if(isIncludeSymbol)
        SUPERSET = SUPERSET.concat(SYMBOLS);    
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
    setTimeout(function(){
        message.setAttribute("class", "d-none");
    }, 2000);
 }

 /* modern asynchronous Clipboard API */
 function copyPasswordToClipboard(){
    const newClip = document.querySelector("#generatedPassword").value;
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            updateClipboard(newClip);
        }
    });
 }

 function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
       console.log("clipboard successfully set");
     }, function() {
        console.log("clipboard write failed");
  });
 }
    