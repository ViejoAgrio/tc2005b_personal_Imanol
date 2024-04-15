const fs = require('fs');

function escribirEnArchivo(nombreArchivo, contenido) {
  fs.writeFile(nombreArchivo, contenido, (error) => {
    if (error) {
      console.error('Error al escribir en el archivo:', error);
    } else {
      console.log(`El contenido se ha escrito correctamente en "${nombreArchivo}".`);
    }
  });
}

const miContenido = '¡Hola, mundo! Este es un ejemplo de texto que se escribirá en un archivo.';
const nombreArchivo = 'mi-archivo.txt';
escribirEnArchivo(nombreArchivo, miContenido);
