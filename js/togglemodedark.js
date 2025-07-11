// modoOscuro.js
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const btn = document.getElementById("modeBtn");
  
    function toggleModoOscuro(activar) {
      body.classList.toggle('bg-light', !activar);
      body.classList.toggle('text-dark', !activar);
      body.classList.toggle('bg-dark', activar);
      body.classList.toggle('text-white', activar);
  
      if (btn) {
        btn.textContent = activar ? "☀️" : "🌙"  ;
      }
  
      localStorage.setItem('modoOscuro', activar);
    }
  
    if (localStorage.getItem('modoOscuro') === 'true') {
      toggleModoOscuro(true);
    } else {
      toggleModoOscuro(false);
    }
  
    if (btn) {
      btn.addEventListener('click', () => {
        const oscuro = body.classList.contains('bg-dark');
        toggleModoOscuro(!oscuro);
      });
    }
  });