// server.js
const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Envía el archivo HTML como respuesta
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
