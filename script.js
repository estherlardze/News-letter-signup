const button = document.getElementById("button");

button.addEventListener('click', function checkEmailValidation(){

const emailInput = document.getElementsById("email");
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const errorMessage = document.getElementsById("error-msg");

 if(emailInput.value.match(regex)){
    errorMessage.style.display = "none";
    emailInput.style.backgroungColor = "red"
    }
 else{
     errorMessage.style.display = "block";
    emailInput.style.border = "1px solid red"
    }
});
