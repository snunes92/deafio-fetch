document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('registroForm');
    const respuestaDiv = document.getElementById('respuesta');

    formulario.addEventListener('submit', function (event) {
        console.log('Formulario enviado');
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        // Crea un objeto JavaScript con los datos del formulario
        const datos = {
            nombre,
            apellido,
            fechaNacimiento,
        };

        // Envía una solicitud POST al servidor utilizando fetch()
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST', // Método HTTP POST
            headers: {
                'Content-Type': 'application/json', // Tipo de contenido JSON
            },
            body: JSON.stringify(datos), // Convierte el objeto data a una cadena JSON
        })
            .then(response => response.json()) // Parsea la respuesta del servidor como JSON
            .then(data => {
                // Muestra la respuesta del servidor en el div de respuesta
                respuestaDiv.innerHTML = `Respuesta del servidor: ${JSON.stringify(data)}`;
            })
            .catch(error => {
                // En caso de error, muestra un mensaje de error
                respuestaDiv.innerHTML = `Error: ${error.message}`;
            });
    });
});
