
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
  
      try {
        const res = await fetch(`${URL_API}users`);
        const users = await res.json();
  
        // Buscar manualmente por email o username
        const user = users.find(u => 
          (u.email === loginInput || u.userName === loginInput) &&
          u.password === passwordInput
        );
  
        if (user) {
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