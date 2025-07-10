document.addEventListener("DOMContentLoaded", () => {
    const URL_api = "http://localhost:3000/";
    const fullName = document.getElementById();
    const email = document.getElementById()
    const userName = document.getElementById()
    const password = document.getElementById()
    const registerForm = document.getElementById("register");
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

    })


});


// document.addEventListener("DOMContentLoaded", () => {
//   const URL_API = "http://localhost:3000";
//   const form = document.getElementById("register");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     registrarUsuario();
//   });

//   async function registrarUsuario() {
//     const fullName = document.getElementById("fullName").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const userName = document.getElementById("userName").value.trim();
//     const password = document.getElementById("password").value.trim();

//     // Validación básica
//     if (!fullName || !email || !userName || !password) {
//       alert("Por favor, completa todos los campos.");
//       return;
//     }

//     // Separar nombre y apellido
//     const [name, ...lastNameArr] = fullName.split(" ");
//     const lastName = lastNameArr.join(" ");

//     try {
//       // Verificar si el correo o userName ya existen
//       const res = await fetch(`${URL_API}/users?email=${email}&userName=${userName}`);
//       const existing = await res.json();

//       const emailExists = existing.some(u => u.email === email);
//       const userExists = existing.some(u => u.userName === userName);

//       if (emailExists || userExists) {
//         let msg = "Ya existe una cuenta con:";
//         if (emailExists) msg += "\n- Este email";
//         if (userExists) msg += "\n- Este nombre de usuario";
//         alert(msg);
//         return;
//       }

//       // Crear usuario
//       const newUser = {
//         id: crypto.randomUUID(), // ID único
//         name,
//         lastName,
//         email,
//         userName,
//         password
//       };

//       const save = await fetch(`${URL_API}/users`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newUser)
//       });

//       if (!save.ok) throw new Error("No se pudo guardar el usuario.");

//       alert("Registro exitoso. Ahora inicia sesión.");
//       window.location.href = "./login.html";

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Hubo un problema al registrar el usuario.");
//     }
//   }
// });
