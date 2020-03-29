const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'everto',
            edad: 28,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('hola mundo');
        res.end();

    })
    .listen(8080);

console.log('escuchando el puierto 8080');