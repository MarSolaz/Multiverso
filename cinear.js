async function obtenerObraDeArte() {
    try {
        console.log('Obteniendo obra de arte...');
        // Hacer una solicitud a la API para obtener una obra de arte de un artista argentino
        const response = await fetch('https://www.cultura.gob.ar/api/v2.0/obras-de-arte/?pais=Argentina');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        const obras = data.results;

        if (obras.length === 0) {
            throw new Error('No se encontraron obras de arte de artistas argentinos');
        }

        // Seleccionar una obra de arte al azar
        const randomIndex = Math.floor(Math.random() * obras.length);
        const obra = obras[randomIndex];

        console.log('Obra de arte obtenida:', obra);

        // Crear elemento de imagen y agregar información
        const img = document.createElement('img');
        img.src = obra.imagen;
        img.alt = obra.titulo;
        img.title = obra.titulo;

        // Mostrar la obra de arte en la galería
        const gallery = document.getElementById('gallery');
        gallery.appendChild(img);
    } catch (error) {
        console.error('Error al cargar la obra de arte:', error);
        alert('Ocurrió un error al intentar cargar la obra de arte. Revisa la consola para más detalles.');
    }
}

// Cargar una obra de arte al cargar la página
window.onload = obtenerObraDeArte;
