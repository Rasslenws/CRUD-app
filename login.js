let userAdmin1 = "aziz";
let userAdmin2 = "rasslen";
let pwd = "azizrasslen";
let login = document.getElementById("login");
let error=document.getElementById('error');

login.onclick = function() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    if((userName == userAdmin1 || userName == userAdmin2) && (password == pwd)) {
        window.location.href = "index.html";
    } else {
        error.innerHTML='invalide password or user name';       
    }
}
