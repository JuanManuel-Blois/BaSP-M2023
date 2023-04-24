var emailInput = document.querySelector(`input[name="e-mail"]`);
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

emailInput.addEventListener("blur", function() {
    if (!emailExpression.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
        var error = emailInput.parentElement.parentElement.querySelector(".message");
        error.textContent = "Insert a valid email address"
    }
})

emailInput.addEventListener("focus", function() {
    emailInput.style.borderColor = "#373867"
})

var pass = document.querySelector(`input[name="pass"]`);

pass.addEventListener("blur", validatePass)

function validatePass(){
    var passValue = pass.value;
    if(specialCharacterCheck(passValue)){
        pass.style.borderColor = "red";
        var error = pass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Only numbers and letters are valid"
}
}

function specialCharacterCheck(wordInput) {
    var specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
    for (var i = 0; i < wordInput.length; i++) {
        if (specialCharacters.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

pass.addEventListener("focus", function(){
    pass.style.borderColor = "#373867"
})

var loginButton = document.querySelector("#login-button")
loginButton.addEventListener("click", function(){
    var emailCheck = emailExpression.test(emailInput.value)
    var passCheck = specialCharacterCheck(pass.value)

    if(!emailCheck){
        var emailError = "Invalid email address"
        alert (emailError)
    }
    if(passCheck){
        var passError = "Invalid password"
        alert (passError)
    }
    if(!emailCheck && passCheck){
        alert("Invalid email & password")
    }
    if(emailCheck && !passCheck){
        alert("email " + emailInput.value + " password " + pass.value)
    }
})


console.log(loginButton)


