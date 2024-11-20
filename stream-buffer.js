const http = require('http');
const fs = require('fs');

// creating a server using row node.js
const server = http.createServer();

// listener
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

    // streaming file reading
    const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')

    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer)
    })

    readableStream.on('end', () => {
        res.statusCode = 200;
        res.end('The stream is over!')
    })

    readableStream.on('error', (error) => {
        res.statusCode = 500;
        res.end('Something went wrong');
        console.log(error)
    })

});

server.listen(5000, () => {
    console.log(`server is listening on port 5000`);
})