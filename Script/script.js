document.addEventListener("DOMContentLoaded", () => {
    const btnTop = document.getElementById("btnTop");

    if (btnTop) {
        // Mostrar u ocultar el botón según el scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                btnTop.style.display = "block";
            } else {
                btnTop.style.display = "none";
            }
        });

        // Acción al hacer clic para subir suavemente
        btnTop.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    }
});