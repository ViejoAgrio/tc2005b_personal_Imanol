const express = require('express');
const app = express();

// Configurar el middleware para parsear JSON y URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar las rutas
app.use('/', require('./routes/index'));
app.use('/route1', require('./routes/route1'));
app.use('/route2', require('./routes/route2'));
app.use('/route3', require('./routes/route3'));
app.use('/form', require('./routes/formRoute'));

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
