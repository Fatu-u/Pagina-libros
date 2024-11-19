const baseRawUrl = "http://localhost:5000";
const baseUrl = `${baseRawUrl}/api`;

window.addEventListener("DOMContentLoaded", function(event){
    window.addEventListener('load', function(event){
        const loginForm = document.getElementById('login-user-form');
        loginForm.addEventListener('submit', loginUser);
    });
});

function loginUser(event){
    event.preventDefault();
    const loginUrl = `${baseUrl}/auth/Login`;

    if(!Boolean(event.currentTarget["e-mail"].value)){
        var eMailInput = document.getElementById('e-mail');
        eMailInput.placeholder = "The E-Mail is required";
        eMailInput.classList.add('bad-input');
        return 0;
    }

    if(!Boolean(event.currentTarget["password"].value)){
        var eMailInput = document.getElementById('pwd');
        eMailInput.placeholder = "The password is required";
        eMailInput.classList.add('bad-input');
        return 0;
    }

    window.location.href = "/home.html"
}