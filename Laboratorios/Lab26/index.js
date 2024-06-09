const http    = require('http');
const express = require('express');
const path    = require('path');
const app     = express();

app.set('view engine', 'ejs'); 
app.set('views', 'views'); 

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res, next) => {
    res.render('bienvenido'); 
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);