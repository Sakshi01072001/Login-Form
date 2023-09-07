let loginBtn = document.getElementById("loginBtn");
        let registerBtn = document.getElementById("registerBtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");

        registerBtn.onclick = function () {
            nameField.style.maxHeight = "0";
            title.innerHTML = "Register";
            loginBtn.classList.add("disable");
            registerBtn.classList.remove("disable");

        }

        loginBtn.onclick = function () {
            nameField.style.maxHeight = "60px";
            title.innerHTML = "Login";
            loginBtn.classList.remove("disable");
            registerBtn.classList.add("disable");
        }

function myfunction(){
    var X =document.getElementById("pass");

    if(X.type === "password"){
        X.type = "text";
    }
    else{
        X.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Successful!");
        return false;
    }
    else{
        alert("Login Failed");
    }
    
}