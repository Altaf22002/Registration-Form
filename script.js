let Username = document.querySelector("#Username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let Password2 = document.querySelector("#password2");
let Form = document.querySelector("#Form");


function ShowError(input, message){
    const FormControl = input.parentElement
    FormControl.className = "form-control error";
    const small = FormControl.querySelector("small");
    small.innerText = message;


}

function ShowSuccess(input){
    const FormControl = input.parentElement
    FormControl.className = "form-control success";

}

function checkMail (input){
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(RegEx.test(input.value)){
        ShowSuccess(input)
    }else{
        ShowError(input, "email is not valid")
    }
}


function  CheckInputLength(input, min ,max) {
    if(input.value.length < min) {
        ShowError(input, `${GetFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        ShowError(input, `${GetFieldName(input)} must be less than ${max} characters`);
    }else {
        ShowSuccess(input);
    }
}

function GetFieldName (input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function CheckPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        ShowError(input2, 'Passwords do not match');
    }
}



Form.addEventListener("submit", (e)=> {
     e.preventDefault();

     CheckInputLength(Username, 3, 20);
     CheckInputLength(password, 6, 30);
     checkMail(email);
     CheckPasswordMatch(password, Password2);

} )