const email = document.getElementById("email");
const grab = document.getElementById("submit");
const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



grab.addEventListener("click",validateEmial);


function validateEmial(){
    var emailtest = email.value;

   if(emailtest.match(expression)){
       alert("Thank you for adding your E-mail. Regsitered Successfully");
       return true;
   }
    else{
        alert("Your have made a wrong E-mail input format. Please check it correctly and enter once again");
        return false;
    }
}