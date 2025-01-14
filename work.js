let signupBtn = document.getElementById("signupBtn");
    let signinBtn = document.getElementById("signinBtn");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");
    let traval = document.getElementById("traval");
    let pho = document.getElementById("pho");
    let Submit = document.getElementById("Submit");

    signinBtn.onclick = function(){
        nameField.style.maxHeight = "0";
        traval.style.maxHeight = "0";
        pho.style.maxHeight = "0";
        title.innerHTML = "Sign In for first step finder";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    }

    signupBtn.onclick = function(){
        nameField.style.maxHeight = "60px";
        traval.style.maxHeight = "60px";
        pho.style = "60px";
        title.innerHTML = "Sign up for first step finder";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }
    Submit.onclick = function(){
        alert("form submitted");
        window.open("demo.html");
        window.close("index.html");
    }

    