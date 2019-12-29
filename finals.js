//REGISTRATION
function checkform(){
    //Definition to the id's of the form:
    let form = document.querySelector("#checkform");
    let pass = form.pass;
    let pass2 = form.pass2;

    //Definition of booleans:
    let valuematch = false;
    let passlength = false;
    let equalpass = false;

    //Definition of button:
    //let btnSignUp = document.querySelector(".btn-info");

    //Checks if the password is between following characters:
    if(pass.value.test[/^[a-z][A-Z][0-9][.,-]$/]){
        valuematch = true;
    } else {
        valuematch = false;
        // check if the alert works - during an error: console.log(alert); -Working.
    } 

    //Check if the password is 8 characters or more - could have been defined as >= 8 as well as > 7:
    if(pass.value.length > 7){
        passlength = true; 
    } else {
        passlength = false;
    }

    //Check if the passwords are equal:
    if(pass.value === pass2.value){
        equalpass = true;
    } else {
        equalpass = false;
    }

    //If all 3 statements above is true, the function will return true and the data passed on to the php-server:
    if(valuematch == true && passlength == true && equalpass == true){
        //btnSignUp.classList.add("btn-success");
        return true;
    } else {
        return false;
    }

    //By letting the function return false, the data won't be passed on to the php-server before fullfilling the condisions above.
   return false;
}

