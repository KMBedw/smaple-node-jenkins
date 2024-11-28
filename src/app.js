const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World Ed!\n');
});
server.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});