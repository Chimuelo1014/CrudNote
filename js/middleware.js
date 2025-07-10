const auth = sessionStorage.getItem("auth");
console.log(auth);
if (!auth) {
    alert("Debe iniciar sesion primero");
    window.location = "./login.html"
}
