const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Ruta GET para mostrar el formulario
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/form.html'));
});

// Ruta POST para manejar el envío del formulario
router.post('/submit', (req, res) => {
  const { data } = req.body;
  const filePath = path.join(__dirname, '../data/data.txt');

  // Guardar datos en el archivo de texto
  fs.appendFile(filePath, data + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al guardar los datos');
    } else {
      res.send('Datos guardados correctamente');
    }
  });
});

module.exports = router;
