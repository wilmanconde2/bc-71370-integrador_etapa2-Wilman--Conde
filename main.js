import './sass/main.scss';
import Handlebars from 'handlebars';

window.addEventListener('DOMContentLoaded', async function () {
  const url = import.meta.env.VITE_API_KEY;
  try {
    const respuesta = await fetch('templates/card.hbs');
    if (!respuesta.ok) {
      throw new Error('No se pudo obtener la plantilla');
    }
    const plantilla = await respuesta.text();
    const template = Handlebars.compile(plantilla);
    template({ plantilla: plantilla });

    // ! local host db.json
    // const respuestaBackend = await fetch('  http://localhost:8080/productos');
    // ! mock api endpoint
    const respuestaBackend = await fetch(url);
    if (!respuestaBackend.ok) {
      throw new Error('Algo paso con los productos', respuestaBackend.status);
    }
    const dataProductos = await respuestaBackend.json();
    const data = { productos: dataProductos };
    const html = template(data);

    const contenedorCards = document.querySelector('#contenedorCards');
    if (!contenedorCards) {
      throw new Error('No se encontró el contenedor');
    }
    contenedorCards.innerHTML = html;
  } catch (error) {
    console.error('Error:', error);
  }
});
