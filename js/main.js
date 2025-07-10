// document.addEventListener("DOMContentLoaded", () => {
//   const API_URL = "http://localhost:3000";
//   const user = JSON.parse(sessionStorage.getItem("usuario"));
//   const welcomeEl = document.querySelector("h2"); // usa <h2 class="fw-bold mb-3">
//   const myNotesContainer = document.querySelector(".row.g-3.mb-5");
//   const sharedNotesContainer = document.querySelectorAll(".row.g-3")[1]; // 2do .row.g-3

//   // 1. Verificar sesión activa
//   if (!user) {
//     alert("Debes iniciar sesión");
//     window.location.href = "login.html";
//     return;
//   }

//   // 2. Mostrar nombre dinámico
//   welcomeEl.textContent = `Hello, ${user.name}`;

//   // 3. Cargar y renderizar notas personales
//   fetch(`${API_URL}/notes?ownerId=${user.id}`)
//     .then(res => res.json())
//     .then(notes => {
//       myNotesContainer.innerHTML = notes.length
//         ? notes.map(renderNoteCard).join("")
//         : "<p class='text-muted'>No personal notes yet.</p>";
//     });

//   // 4. Cargar y renderizar notas compartidas
//   fetch(`${API_URL}/sharedNotes?sharedWithUserId=${user.id}`)
//     .then(res => res.json())
//     .then(async shared => {
//       const notePromises = shared.map(entry =>
//         fetch(`${API_URL}/notes/${entry.noteId}`).then(res => res.json())
//       );
//       const sharedNotes = await Promise.all(notePromises);

//       sharedNotesContainer.innerHTML = sharedNotes.length
//         ? sharedNotes.map(renderNoteCard).join("")
//         : "<p class='text-muted'>No shared notes yet.</p>";
//     });

//   // 5. Función para generar una nota en HTML
//   function renderNoteCard(note) {
//     return `
//       <div class="col-md-6 col-lg-3">
//         <div class="note-card">
//           <div class="d-flex align-items-center mb-2">
//             <span class="note-icon">📝</span>
//             <strong>${note.title}</strong>
//           </div>
//           <p class="text-muted mb-0">${note.content}</p>
//         </div>
//       </div>
//     `;
//   }

//   // 6. Cerrar sesión
//   const logoutBtn = document.querySelector("button.btn-light");
//   logoutBtn.addEventListener("click", () => {
//     sessionStorage.clear();
//     window.location.href = "login.html";
//   });
// });
