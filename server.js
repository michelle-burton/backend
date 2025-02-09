console.log("hello world from Node.js");

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });// set response headers
    res.end('Hello, world! This is my first Node.js server'); // send response
    // });'
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
