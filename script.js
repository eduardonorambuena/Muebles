document.addEventListener("DOMContentLoaded", function() {
    var contactoLink = document.getElementById("contacto-link");

    if (contactoLink) {
        var numeroContacto = document.getElementById("numero-contacto");

        contactoLink.addEventListener("click", function(event) {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace
            if (numeroContacto) {
            } else {
                console.log("El elemento con ID 'numero-contacto' no se encontró.");
            }
        });
    } else {
        console.log("El elemento con ID 'contacto-link' no se encontró.");
    }
});
