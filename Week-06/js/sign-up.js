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
        console.log("there is a special character")
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
        error.textContent = "Surname needs to be longer than 7 characters";
        error.classList.remove("hidden");
    }
})

inputNationalDoc.addEventListener("focus", function(){
    inputNationalDoc.style.borderColor = "#373867";
    var error = inputNationalDoc.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})