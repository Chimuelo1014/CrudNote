
document.addEventListener("DOMContentLoaded", () => {
  const URL_API = "http://localhost:3000/";
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    autenticar();
  });

  async function autenticar() {
    const loginInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const loginType = loginInput.includes("@") ? "email" : "userName"; // importante: en tu base de datos debe estar como "userName"

    try {
      const res = await fetch(`${URL_API}users?${loginType}=${loginInput}&password=${passwordInput}`);
      const users = await res.json();

      if (users.length === 1) {
        const user = users[0];
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("usuario", JSON.stringify(user));
        window.location = "../home.html";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor.");
    }
  }

});