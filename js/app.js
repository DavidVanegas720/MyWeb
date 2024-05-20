// -----boton de contacto-------

document.getElementById("contactButton").addEventListener("click", () =>{
    window.location.href = "mailto:jdavidvanegas25@gmail.com"
});

// -------css mostrar text z-index----------------

document.addEventListener('DOMContentLoaded', (event) => {
    const projectLinks = document.querySelectorAll('.content-proyects-links');
  
    projectLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        const overlayText = link.querySelector('.overlay-text');
        overlayText.classList.add('show');
      });
  
      link.addEventListener('mouseout', () => {
        const overlayText = link.querySelector('.overlay-text');    
        overlayText.classList.remove('show');
      });
    });
  });



