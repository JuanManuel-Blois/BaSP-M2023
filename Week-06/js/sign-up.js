var inputName = document.querySelector(`input[name=input-name]`)


inputName.addEventListener("blur", function(){
    var nameValue = inputName.value;
    console.log(nameValue)
    if (nameValue.length < 3){
        console.log("esto anda")
        inputName.style.borderColor = "red";
    }
})