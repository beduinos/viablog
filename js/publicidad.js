window.onload = function() {
    // Crear el contenedor de publicidad
    const publicidad = document.createElement('div');
    publicidad.id = 'publicidad';
    publicidad.innerHTML = `
        <div id="cerrar-publicidad" onclick="cerrarPublicidad()">X</div>
        <div class="contenido-publicidad">
            <p>MALETAS Y MOCHILAS AL MEJOR PRECIO</p>
            <img src="img/oferta.jpg" alt="Oferta de viaje">
            <a href="https://www.maletasgreenwich.com/es/" target="_blank">Más información</a>
        </div>
    `;

    // Estilo del contenedor de publicidad
    publicidad.style.position = 'fixed';
    publicidad.style.bottom = '0';
    publicidad.style.width = '70%';
    publicidad.style.height= '50%';
    publicidad.style.backgroundColor = 'rgba(241, 196, 15, 0.9)';
    publicidad.style.padding = '20px';
    publicidad.style.boxShadow = '0 -5px 10px rgba(0,0,0,0.2)';
    publicidad.style.zIndex = '1000';
    publicidad.style.display = 'flex';
    publicidad.style.justifyContent = 'center';
    publicidad.style.alignItems = 'center';

    // Estilo del botón de cerrar publicidad
    const cerrarButton = publicidad.querySelector('#cerrar-publicidad');
    cerrarButton.style.cursor = 'pointer';
    cerrarButton.style.fontWeight = 'bold';
    cerrarButton.style.padding = '5px';
    cerrarButton.style.backgroundColor = '#444';
    cerrarButton.style.color = 'white';
    cerrarButton.style.borderRadius = '50%';
    
    // Agregar el contenedor de publicidad al final del body
    document.body.appendChild(publicidad);
};

// Función para cerrar la publicidad
function cerrarPublicidad() {
    const publicidad = document.getElementById('publicidad');
    if (publicidad) {
        publicidad.style.display = 'none';
    }
}