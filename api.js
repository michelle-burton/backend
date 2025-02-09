const http = require('http');

const users = [
    { id: 1, name: 'Rockette', age: 25 },
    { id: 2, name: 'Michelle', age: 50 },
    { id: 3, name: 'Randy', age: 45  }
];

const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});