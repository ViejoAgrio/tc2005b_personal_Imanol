const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const qs = require('querystring');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (req.method === 'GET' && reqUrl.pathname === '/') {
        // Servir la página HTML de inicio
        const indexPath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(indexPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && reqUrl.pathname === '/submit') {
        // Procesar datos del formulario enviado por POST
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = qs.parse(body);
            const { name, email } = formData;

            const data = `${name}, ${email}\n`;

            // Guardar datos en un archivo
            const filePath = path.join(__dirname, 'data', 'registros.txt');
            fs.appendFile(filePath, data, (err) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500);
                    res.end('Error interno del servidor al guardar los datos');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Datos guardados correctamente');
                }
            });
        });
    } else {
        // Manejar rutas no encontradas (404)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada, error 404');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

