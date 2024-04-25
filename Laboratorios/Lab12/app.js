// app.js

const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'mysecret', // Cambia esto con una cadena secreta más segura
    resave: false,
    saveUninitialized: true
}));

// Ruta de inicio de sesión
app.get('/login', (req, res) => {
    res.render('login'); // Renderiza la vista login.ejs
});

app.post('/login', (req, res) => {
    const username = req.body.username; // Obtiene el valor del campo username
    const password = req.body.password; // Obtiene el valor del campo password

    // Imprimir los datos en la consola del servidor
    console.log(`Nombre de Usuario: ${username}`);
    console.log(`Contraseña: ${password}`);

    req.session.username = username;

    // Redirigir a otra ruta (por ejemplo, '/profile')
    res.redirect('/profile');
});

// Ruta para el perfil de usuario
app.get('/profile', (req, res) => {
    const username = req.session.username; 
    res.render('profile', { username }); // Puedes renderizar una vista o enviar una respuesta
});

// Ruta de cambio de contraseña
app.get('/cambio-contrasena', (req, res) => {
    res.render('cambio-contrasena'); // Renderiza la vista cambio-contrasena.ejs
});

// Ruta para el administrador
app.get('/admin', (req, res) => {
    res.render('admin'); // Renderiza la vista admin.ejs
});

// Ruta para el usuario
app.get('/usuario', (req, res) => {
    res.render('usuario'); // Renderiza la vista usuario.ejs
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

