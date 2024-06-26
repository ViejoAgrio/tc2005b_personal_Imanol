const http    = require('http');
const express = require('express');
const path    = require('path');
const app     = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.set('view engine', 'ejs'); 
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/*Lab 17: Interacción con la base de datos*/
const mariadb = require("mariadb");
const pool = mariadb.createPool({
host:"localhost",
user:"root",
password:"qazSPILI741",
database: "test",
connectionLimit:5,
port:3308
});

app.get('/', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola mundo");
    response.end(); 
});

app.get('/test_ejs', async(request, response, next) => {
    response.render('usuarios/login');
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

/*Lab 14: Manejo de sesiones y cookies*/ 
app.get('/test_cookie', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Set-Cookie', 'mi_cookie=123; HttpOnly');
    response.send("Hola Mundo");
    response.end(); 
});

app.get('/test_value_cookie', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.cookies.mi_cookie);
    response.end(); 
});

app.get('/test_session', async(request, response, next) => {
    request.session.mi_variable = "valor"
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

app.get('/test_session_variable', async(request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

app.get('/logout', async(request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
});

/*Lab 17: Interacción con la base de datos*/
app.get('/test_db', async(request, response, next) => {
    let conn;

    try{
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM books")
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        response.writeHead(200, {'Content-type':'text/html'});
        response.end(jsonS);
    }catch(e){
        console.log(e)
    }
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);