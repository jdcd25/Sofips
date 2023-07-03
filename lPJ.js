function Login() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if (email === "poetry@gmail.com" && pass === "123"){
        alert('Login Successful!');
        window.location.href = '\Users\Kevin\Videos\New folder\dPoetry.html';
    }
    else {
        alert('Incorrect Credentials');
    }
}