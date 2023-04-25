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

var pass = document.querySelector(`input[name="pass"]`);

pass.addEventListener("blur", validatePass)

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
    }

    if (!hasLetters) {
        pass.style.borderColor = "red";
        var error = pass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Password must contain letters";
        error.classList.remove("hidden");
    }
    
    if (!hasNumbers) {
        pass.style.borderColor = "red";
        var error = pass.parentElement.parentElement.querySelector(".message");
        error.textContent = "Password must contain numbers";
        error.classList.remove("hidden");
    }
}

pass.addEventListener("focus", function(){
    pass.style.borderColor = "#373867";
    var error = pass.parentElement.parentElement.querySelector(".message");
    error.classList.add("hidden")
})


var loginButton = document.querySelector("#login-button")
loginButton.addEventListener("click", function(){
    var emailCheck = emailExpression.test(emailInput.value);
    var passCheck = specialCharacterCheck(pass.value);
    if(!emailCheck && passCheck){
        return alert("Invalid email & password");
    }
    if(!emailCheck){
        var emailError = "Invalid email address";
        return alert (emailError);
    }
    if(passCheck){
        var passError = "Invalid password";
        return alert (passError);
    }
        alert("email " + emailInput.value + " password " + pass.value);
})