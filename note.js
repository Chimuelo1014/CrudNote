// document.addEventListener("DOMContentLoaded", () => {
//   const API_URL = "http://localhost:3000";
//   const user = JSON.parse(sessionStorage.getItem("usuario"));
//   const params = new URLSearchParams(window.location.search);
//   const noteId = params.get("id");

//   const titleEl = document.querySelector("h2");
//   const textarea = document.querySelector("textarea");
//   const saveBtn = document.querySelector(".btn-primary");
//   const shareBtn = document.querySelector(".btn-light");
//   const deleteText = document.querySelector(".note-actions p");

//   if (!user) {
//     alert("Debes iniciar sesión.");
//     window.location.href = "login.html";
//     return;
//   }

//   if (!noteId) {
//     alert("Nota no especificada.");
//     window.location.href = "home.html";
//     return;
//   }

//   let currentNote = null;
//   let isOwner = false;
//   let hasEditPermission = false;

//   // 1. Cargar la nota
//   async function cargarNota() {
//     try {
//       const res = await fetch(`${API_URL}/notes/${noteId}`);
//       if (!res.ok) throw new Error("No encontrada");

//       currentNote = await res.json();
//       titleEl.textContent = currentNote.title;
//       textarea.value = currentNote.content;

//       isOwner = currentNote.ownerId === user.id;

//       if (isOwner) {
//         hasEditPermission = true;
//         deleteText.style.cursor = "pointer";
//         deleteText.style.color = "red";
//       } else {
//         // Si no soy el dueño, reviso si me la compartieron
//         const resShared = await fetch(`${API_URL}/sharedNotes?noteId=${noteId}&sharedWithUserId=${user.id}`);
//         const permisos = await resShared.json();
//         hasEditPermission = permisos[0]?.permission === "edit";
//       }

//       // Ajustar permisos
//       textarea.disabled = !hasEditPermission;
//       saveBtn.disabled = !hasEditPermission;

//       if (!isOwner) {
//         deleteText.style.display = "none";
//         shareBtn.style.display = "none";
//       }

//     } catch (err) {
//       console.error(err);
//       alert("No se pudo cargar la nota.");
//     }
//   }

//   // 2. Guardar cambios
//   saveBtn.addEventListener("click", async () => {
//     if (!hasEditPermission) return;

//     try {
//       await fetch(`${API_URL}/notes/${noteId}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ content: textarea.value })
//       });
//       alert("Cambios guardados.");
//     } catch (err) {
//       console.error(err);
//       alert("Error al guardar.");
//     }
//   });

//   // 3. Eliminar nota (solo si soy el dueño)
//   deleteText.addEventListener("click", async () => {
//     if (!isOwner) return;
//     const confirmDelete = confirm("¿Seguro que deseas eliminar esta nota?");
//     if (!confirmDelete) return;

//     try {
//       await fetch(`${API_URL}/notes/${noteId}`, { method: "DELETE" });
//       alert("Nota eliminada.");
//       window.location.href = "home.html";
//     } catch (err) {
//       console.error(err);
//       alert("Error al eliminar.");
//     }
//   });

//   cargarNota();
// });
