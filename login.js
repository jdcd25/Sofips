const logEmail = imAPoetry@gmail.com;
const logPass = poetry123;

function login(){
    let email = document.getElementsById("email").value;
    let password = document.getElementsById("pass").value;

    console.log(email + pass);

    if (email == logEmail && password == logPass) {
        window.location.href = "akin.html";
    } else {
        alert("Incorrent email or password");
        document.getElementById("pass").value = "";
    }
}