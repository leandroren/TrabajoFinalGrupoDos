function toggleMenu() {
    // Menu
    const menu = document.getElementById("menu");
    const icono = document.querySelector(".icono-hamburguesa");

        if (menu.style.display === "block") {
            menu.style.display = "none";
            icono.innerHTML = "&#9776;"; 
        } else {
            menu.style.display = "block";
            icono.innerHTML = "&#10006;"; 
        }
}

    // Formulario de contacto
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('.formulario form');
    
        if (form) { // Verifica si el formulario existe
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
                // Obtiene los valores de los campos del formulario
                const nombre = form.querySelector('input[type="text"][placeholder="Nombre"]').value;
                const apellido = form.querySelector('input[type="text"][placeholder="Apellido"]').value;
                const email = form.querySelector('input[type="email"]').value;
                const interes = form.querySelector('select').value;
    
                // Para que ingrese solo letras
                const regexNombreApellido = /^[A-Za-z]+$/;
    
                // Verificar si los campos están vacíos o contienen números
                if (nombre === '' || apellido === '' || email === '' || interes === 'Me interesa...') {
                    alert('Por favor, completar todos los campos del formulario.');
                    return; // Detener la ejecución si hay campos vacíos
                } else if (!regexNombreApellido.test(nombre) || !regexNombreApellido.test(apellido)) {
                    alert('El nombre y el apellido solo pueden tener letras.');
                    return; // Detener la ejecución si el nombre o apellido contiene números
                }
    
                // Validar el formato del email utilizando una expresión regular
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regexEmail.test(email)) {
                    alert('Email no válido.');
                    return; // Detener la ejecución si el correo electrónico no es correcto
                }
    
                // Simular el envío del formulario
                alert('¡Formulario enviado exitosamente!');
                form.reset(); // Limpiar el formulario después de enviarlo
            });
        } 
    });
    