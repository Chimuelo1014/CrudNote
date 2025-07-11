document.addEventListener("DOMContentLoaded", () => {
    const URL_api = "http://localhost:3000/";
    const registerForm = document.getElementById("register");
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        registrarUsuario();
    })

async function registrarUsuario() {
    const inputFullName = document.getElementById('fullName').value;
    const inputEmail = document.getElementById('email').value;
    const inputUserName = document.getElementById('userName').value;
    const inputPassword = document.getElementById('password').value;

if (!inputFullName || !inputEmail || !inputPassword || !inputUserName) {
    alert("Porfavor complete todos los campos");
    return;
}
const[name, ...lastNameArr] = inputFullName.split(" ");
const lastName = lastNameArr.join(" ");

try {
    const resUser = await fetch(`${URL_api}users?userName=${inputUserName}`);
    const resEmail = await fetch(`${URL_api}users?email=${inputEmail}`)
    const existingUser = await resUser.json();
    const existingEmail = await resEmail.json();

    if (existingUser.length > 0 || existingEmail.length > 0) {
        alert("Ya existe una cuenta con ese usuario o email")
        return;
    }
    const newUser = {
        id : crypto.randomUUID(),
        name,
        lastName,
        email : inputEmail,
        userName : inputUserName,
        password : inputPassword
    };

    const save = await fetch(`${URL_api}users`,{
        method: "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(newUser)
    });
    if (!save.ok) throw new Error("No se pudo guardar el usuario.");
    
    window.location.href = "../home/home.html"
    
    



    } catch (error) {
        alert("Error al conectar con el servidor")
    }
}
});

