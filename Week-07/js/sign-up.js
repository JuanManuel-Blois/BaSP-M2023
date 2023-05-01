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

var nameValidate = function (){
    
    var nameValue = inputName.value;

    if (nameValue.length <= 3){
        inputName.style.borderColor = "red";
        var error = inputName.parentElement.parentElement.querySelector(".message");
        error.textContent = "Name needs to be longer than 3 characters";
        error.classList.remove("hidden");

        return false

    } else if(specialCharacterCheck(nameValue)){
        inputName.style.borderColor = "red";
        var error = inputName.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only letters are valid characters";
        error.classList.remove("hidden");

        return false
        
    }

    return true
} 

inputName.addEventListener("blur", nameValidate)

inputName.addEventListener("focus", function(){
    inputName.style.borderColor = "#373867";
    var error = inputName.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

var inputSurname = document.querySelector(`input[name="surname"]`)

var surnameValidate = function(){
    var surnameValue = inputSurname.value;

    if(surnameValue.length <= 3){
        inputSurname.style.borderColor = "red";
        var error = inputSurname.parentElement.parentElement.querySelector(".message");
        error.textContent = "Surname needs to be longer than 3 characters";
        error.classList.remove("hidden");

        return false

    } else if(specialCharacterCheck(surnameValue)){
        console.log("there is a special character")
        inputName.style.borderColor = "red";
        var error = inputSurname.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only letters are valid characters";
        error.classList.remove("hidden");

        return false
    }
    return true
}

inputSurname.addEventListener("blur", surnameValidate)

inputSurname.addEventListener("focus", function(){
    inputSurname.style.borderColor = "#373867";
    var error = inputSurname.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

var inputNationalDoc = document.querySelector(`input[name="national-doc"]`)

var nationalValidate = function(){
    var nationalValue = inputNationalDoc.value;

    if(nationalValue.length > 0 && isNaN(nationalValue)){
        inputNationalDoc.style.borderColor = "red";
        var error = inputNationalDoc.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only numbers are valid characters";
        error.classList.remove("hidden");

        return false;
    }
        else if(nationalValue.length <= 7){
        inputNationalDoc.style.borderColor = "red";
        var error = inputNationalDoc.parentElement.parentElement.querySelector(".message");
        error.textContent = "DNI needs to be longer than 7 characters";
        error.classList.remove("hidden");

        return false;
    }
    return true;
}


inputNationalDoc.addEventListener("blur", nationalValidate)

inputNationalDoc.addEventListener("focus", function(){
    inputNationalDoc.style.borderColor = "#373867";
    var error = inputNationalDoc.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

var dateInput = document.querySelector(`input[name="date-birth"]`)
console.log(dateInput)
dateValue = dateInput.value

var dateValidation = function(){
    dateValue = dateInput.value
    if(!dateValue){
        dateInput.style.borderColor = "red";
        var error = dateInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Field must not be empty";
        error.classList.remove("hidden");

        return false;
    }
    
    return true;
}

dateInput.addEventListener ("blur", dateValidation)

dateInput.addEventListener("focus", function(){
    dateInput.style.borderColor = "#373867";
    var error = dateInput.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})


var inputPhone = document.querySelector(`input[name="phone"]`)

var phoneValidation = function(){
    var phoneValue = inputPhone.value;
    
    if(phoneValue.length > 0 && isNaN(phoneValue)){
        inputPhone.style.borderColor = "red";
        var error = inputPhone.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only numbers are valid characters";
        error.classList.remove("hidden");

        return false
    }
    else if(phoneValue.length != 10){
        inputPhone.style.borderColor = "red";
        var error = inputPhone.parentElement.parentElement.querySelector(".message");
        error.textContent = "Phone must be 10 numbers";
        error.classList.remove("hidden");

        return false;
    }
    
    return true;
}

inputPhone.addEventListener("blur", phoneValidation)

inputPhone.addEventListener("focus", function(){
    inputPhone.style.borderColor = "#373867";
    var error = inputPhone.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

var addressInput = document.querySelector(`input[name="address"]`);

var addressValidation = function(){
    var addressValue = addressInput.value.trim();

    var hasLetters = false;
    var hasNumbers = false;
    var hasSpace = false;

    for (var i = 0; i < addressValue.length; i++) {
        var characters = addressValue.charAt(i);
        if (!isNaN(characters)) {
            hasNumbers = true;
        } else {
            hasLetters = true;
        }
        if(characters == " "){
            hasSpace = true
        }
    }
    if(hasNumbers == true && hasLetters ==true && hasSpace ==true){

        if(addressValue.length  < 5){
            addressInput.style.borderColor = "red";
            var error = addressInput.parentElement.parentElement.querySelector(".message");
            error.textContent = "Must contain at least 5 characters";
            error.classList.remove("hidden");
        } else{

        return true;

        }
    } else {
        addressInput.style.borderColor = "red";
        var error = addressInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Must contain letters, numbers and space";
        error.classList.remove("hidden");
        return false;
    }

}

addressInput.addEventListener("blur", addressValidation)

addressInput.addEventListener("focus", function(){
    addressInput.style.borderColor = "#373867";
    var error = addressInput.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

var cityOfResidence = document.querySelector(`input[name="city-resident"]`);

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
        return true;
    }
}

var cityValidation = function(){
    var cityValue = cityOfResidence.value;
    console.log(cityValue)

    if(specialCharacterCheckTwo(cityValue)){
        cityOfResidence.style.borderColor = "red";
        var error = cityOfResidence.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only letters and numbers are valid";
        error.classList.remove("hidden");

        return false;
    }
    
    if(!inputLetterValidation(cityValue)){
        cityOfResidence.style.borderColor = "red";
        var error = cityOfResidence.parentElement.parentElement.querySelector(".message");
        error.textContent = "It needs more than 3 letters";
        error.classList.remove("hidden");

        return false;
    }

    return true;
}

cityOfResidence.addEventListener("blur", cityValidation)

cityOfResidence.addEventListener("focus", function(){
    cityOfResidence.style.borderColor = "#373867";
    var error = cityOfResidence.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

var postalInput = document.querySelector (`input[name ="postal-code"]`);

var postalValidation = function(){
    var postalValue = postalInput.value

    if(postalValue.length > 0 && isNaN(postalValue)){
        postalInput.style.borderColor = "red";
        var error = postalInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only numbers are valid characters";
        error.classList.remove("hidden");

        return false;
    } 
    if(postalValue.length < 4 || postalValue.length > 5){
        postalInput.style.borderColor = "red";
        var error = postalInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Must contain between 4 to 5 characters";
        error.classList.remove("hidden");

        return false;
    }

    return true;
}

postalInput.addEventListener("blur", postalValidation)

postalInput.addEventListener("focus", function(){
    postalInput.style.borderColor = "#373867";
    var error = postalInput.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

var emailInput = document.querySelector(`input[name="e-mail"]`);
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

var emailValidation = function(){

    if (!emailExpression.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
        var error = emailInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Insert a valid email address";
        error.classList.remove("hidden");

        return false;

    }

    return true;

}

emailInput.addEventListener("blur", emailValidation)

emailInput.addEventListener("focus", function() {
    emailInput.style.borderColor = "#373867";
    var error = emailInput.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden");
})

var pass = document.querySelector(`input[name="pass"]`);

function validatePass(){
    var passValue = pass.value;
    var hasLetters = false;
    var hasNumbers = false;

    for (var i = 0; i < passValue.length; i++) {
        var characters = passValue.charAt(i);
        if (!isNaN(characters)) {
            hasNumbers = true;
        } else {
            hasLetters = true;
        }
    }
    
    if(passValue.length < 8){
        pass.style.borderColor = "red";
        var error = pass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Password must contain as minimum 8 characters";
        error.classList.remove("hidden");

        return false
    }

    if (!hasLetters) {
        pass.style.borderColor = "red";
        var error = pass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Password must contain letters";
        error.classList.remove("hidden");

        return false
    }
    
    if (!hasNumbers) {
        pass.style.borderColor = "red";
        var error = pass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Password must contain numbers";
        error.classList.remove("hidden");

        return false
    }

    return true
}

pass.addEventListener("blur", validatePass)

pass.addEventListener("focus", function(){
    pass.style.borderColor = "#373867";
    var error = pass.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden")
})

var repeatPass = document.querySelector(`input[name="repeat-pass"]`)

var repeatValidation = function(){
    var passValue = pass.value;
    var repeatValue = repeatPass.value;

    if (repeatValue !== passValue){
        repeatPass.style.borderColor = "red";
        var error = repeatPass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Must be the same as password";
        error.classList.remove("hidden");

        return false
    }

    return true
}

repeatPass.addEventListener("blur", repeatValidation)

repeatPass.addEventListener("focus", function(){
    repeatPass.style.borderColor = "#373867";
    var error = repeatPass.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden")
})

var validateAll = function(){
    var array = [];
    if(!nameValidate()){
        array.push("Name is not correct")
    }

    if (!surnameValidate()){
        array.push("\nSurname is not valid")
    }

    if(!nationalValidate()){
        array.push("\nDNI is not valid")
    }

    if(!dateValidation()){
        array.push("\nDate is not valid")
    }

    if(!phoneValidation()){
        array.push("\nPhone is not valid")
    }

    if(!addressValidation()){
        array.push("\nAddres is not valid")
    }

    if(!cityValidation()){
        array.push("\nCity is not valid")
    }

    if(!postalValidation()){
        array.push("\nPostal code is not valid")
    }

    if(!emailValidation()){
        array.push("\nEmail is not valid")
    }

    if(!validatePass()){
        array.push("\nPassword is not valid")
    }

    return array
}

var registerButton = document.querySelector(`#register`)

registerButton.addEventListener("click", function(e){
    e.preventDefault();
    var returnValidation = validateAll();
    if(returnValidation == ""){
        alert( "Name: " +
        inputName.value +
        "\nSurname: " +
        inputSurname.value +
        "\nDNI: " +
        inputNationalDoc.value +
        "\nBirthday: " +
        dateInput.value +
        "\nPhone: " +
        inputPhone.value +
        "\nAdress: " +
        addressInput.value +
        "\nCity: " +
        cityOfResidence.value +
        "\nPostal Code: " +
        postalInput.value +
        "\nEmail: " +
        emailInput.value +
        "\nPassword: " +
        pass.value)
    } else {
        alert(returnValidation)
    }

    var url = `https://api-rest-server.vercel.app/signup?
    name=${inputName.value}&
    lastName=${inputSurname.value}&
    dni=${inputNationalDoc.value}&
    dob=${dateInput.value}&
    phone=${inputPhone.value}&
    address=${addressInput.value}&
    city=${cityOfResidence.value}&
    zip=${postalInput.value}&
    email=${emailInput.value}&
    password=${pass.value}`;

    fetch(url)
        .then(function(res){
            if(res.status.ok) throw new Error("Error")
            return res.json()
        })
        .then (function(data){
            console.log(data)
            alert(data.msg + " " + JSON.stringify(data))
        })
        .catch (function(err){
            alert(err)
        })
})
