var inputName = document.querySelector(`input[name="input-name"]`)

function specialCharacterCheck(wordInput) {
    var specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/1234567890";
    for (var i = 0; i < wordInput.length; i++) {
        if (specialCharacters.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

inputName.addEventListener("blur", function(){
    var nameValue = inputName.value;

    if (nameValue.length <= 3){
        inputName.style.borderColor = "red";
        var error = inputName.parentElement.parentElement.querySelector(".message");
        error.textContent = "Name needs to be longer than 3 characters";
        error.classList.remove("hidden");
    } else if(specialCharacterCheck(nameValue)){
        inputName.style.borderColor = "red";
        var error = inputName.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only letters are valid characters";
        error.classList.remove("hidden");
    }

})

inputName.addEventListener("focus", function(){
    inputName.style.borderColor = "#373867";
    var error = inputName.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

//Surname-----------------------------------

var inputSurname = document.querySelector(`input[name="surname"]`)

inputSurname.addEventListener("blur", function(){
    var surnameValue = inputSurname.value;

    if(surnameValue.length <= 3){
        inputSurname.style.borderColor = "red";
        var error = inputSurname.parentElement.parentElement.querySelector(".message");
        error.textContent = "Surname needs to be longer than 3 characters";
        error.classList.remove("hidden");
    } else if(specialCharacterCheck(surnameValue)){
        console.log("there is a special character")
        inputName.style.borderColor = "red";
        var error = inputSurname.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only letters are valid characters";
        error.classList.remove("hidden");
    }
})

inputSurname.addEventListener("focus", function(){
    inputSurname.style.borderColor = "#373867";
    var error = inputSurname.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

//DNI----------------------------------------------------

var inputNationalDoc = document.querySelector(`input[name="national-doc"]`)


inputNationalDoc.addEventListener("blur", function(){
    var NationalValue = inputNationalDoc.value;

    if(NationalValue.length > 0 && isNaN(NationalValue)){
        inputNationalDoc.style.borderColor = "red";
        var error = inputNationalDoc.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only numbers are valid characters";
        error.classList.remove("hidden");
    }
        else if(NationalValue.length <= 7){
        inputNationalDoc.style.borderColor = "red";
        var error = inputNationalDoc.parentElement.parentElement.querySelector(".message");
        error.textContent = "DNI needs to be longer than 7 characters";
        error.classList.remove("hidden");
    }
})

inputNationalDoc.addEventListener("focus", function(){
    inputNationalDoc.style.borderColor = "#373867";
    var error = inputNationalDoc.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

//Phone Number--------------------------------------------

var inputPhone = document.querySelector(`input[name="phone"]`)

inputPhone.addEventListener("blur", function(){
    var phoneValue = inputPhone.value;
    
    if(phoneValue.length > 0 && isNaN(phoneValue)){
        inputPhone.style.borderColor = "red";
        var error = inputPhone.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only numbers are valid characters";
        error.classList.remove("hidden");
    }
    else if(phoneValue.length != 10){
        inputPhone.style.borderColor = "red";
        var error = inputPhone.parentElement.parentElement.querySelector(".message");
        error.textContent = "Phone must be 10 numbers";
        error.classList.remove("hidden");
    }
})

inputPhone.addEventListener("focus", function(){
    inputPhone.style.borderColor = "#373867";
    var error = inputPhone.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

//Address ---------------------------------------------------



//City of residence -----------------------------------------
var cityOfResidence = document.querySelector(`input[name="city-resident"]`);

console.log(cityOfResidence)

function specialCharacterCheckTwo(wordInput) {
    var specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
    for (var i = 0; i < wordInput.length; i++) {
        if (specialCharacters.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

function inputLetterValidation(input){
    var lettercheck = 0;
    for(var i = 0; i < input.length; i++){
        var letter = input.charAt(i);
        if(!specialCharacterCheck(letter)){
            lettercheck ++;
        }
    }
    if (lettercheck <= 3) {
        return false;
    } else{
        return true
    }
}

cityOfResidence.addEventListener("blur", function(){
    var cityValue = cityOfResidence.value;
    console.log(cityValue)

    if(specialCharacterCheckTwo(cityValue)){
        cityOfResidence.style.borderColor = "red";
        var error = cityOfResidence.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only letters and numbers are valid";
        error.classList.remove("hidden");
    }
    if(!inputLetterValidation(cityValue)){
        cityOfResidence.style.borderColor = "red";
        var error = cityOfResidence.parentElement.parentElement.querySelector(".message");
        error.textContent = "It needs more than 3 letters";
        error.classList.remove("hidden");
    }
})

cityOfResidence.addEventListener("focus", function(){
    cityOfResidence.style.borderColor = "#373867";
    var error = cityOfResidence.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

//postal code-------------------

var postalInput = document.querySelector (`input[name ="postal-code"]`);

postalInput.addEventListener("blur", function(){
   
    var postalValue = postalInput.value

    if(postalValue.length > 0 && isNaN(postalValue)){
        postalInput.style.borderColor = "red";
        var error = postalInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only numbers are valid characters";
        error.classList.remove("hidden");
    } 
    if(postalValue.length < 4 || postalValue.length > 5){
        postalInput.style.borderColor = "red";
        var error = postalInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Must contain between 4 to 5 characters";
        error.classList.remove("hidden");
    }
})

postalInput.addEventListener("focus", function(){
    postalInput.style.borderColor = "#373867";
    var error = postalInput.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

//email-------------
var emailInput = document.querySelector(`input[name="e-mail"]`);
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

emailInput.addEventListener("blur", function() {
    if (!emailExpression.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
        var error = emailInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Insert a valid email address";
        error.classList.remove("hidden");
    }
})

emailInput.addEventListener("focus", function() {
    emailInput.style.borderColor = "#373867";
    var error = emailInput.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

//password--------------

/*var pass = document.querySelector(`input[name="pass"]`);
console.log(pass)

function passwordValidation(wordInput) {
    var hasLetter = false;
    var hasNumber = false;
    var hasSpecialCharacter = false;
  
    var specialCharacters = "!@#$%^&*()_+-=[]{};':\\|,.<>/?";
  
    for (var i = 0; i < wordInput.length; i++) {
      var charCode = wordInput.charCodeAt(i);
  
      if (specialCharacters.indexOf(wordInput[i]) !== -1) {
        hasSpecialCharacter = true;
      } else if (charCode >= 48 && charCode <= 57) {
    
        hasNumber = true;
      } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    
        hasLetter = true;
      }
    }
  
    return hasLetter && hasNumber && hasSpecialCharacter;
  }*/
  

pass.addEventListener("blur", validatePass)

function validatePass(){
    var passValue = pass.value;
    if(specialCharacterCheckTwo(passValue)){
        pass.style.borderColor = "red";
        var error = pass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only numbers and letters are valid";
        error.classList.remove("hidden");
    }
    if(passValue.length < 8){
        pass.style.borderColor = "red";
        var error = pass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Password must contain as minimum 8 characters";
        error.classList.remove("hidden");
    }
    if(passwordValidation(passValue)){
        console.log("esto anda")
    }
}

pass.addEventListener("focus", function(){
    pass.style.borderColor = "#373867";
    var error = pass.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden")
})

//repeat pass --------

var repeatPass = document.querySelector(`input[name="repeat-pass"]`)

repeatPass.addEventListener("blur", function(){
    var passValue = pass.value;
    var repeatValue = repeatPass.value;

    if (repeatValue !== passValue){
        repeatPass.style.borderColor = "red";
        var error = repeatPass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Must be the same as password";
        error.classList.remove("hidden");
    }
})

repeatPass.addEventListener("focus", function(){
    repeatPass.style.borderColor = "#373867";
    var error = repeatPass.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden")
})


/*var validateGroup = function(formGroup){
    var inputTest = formGroup.querySelector(`input`);
}*/

