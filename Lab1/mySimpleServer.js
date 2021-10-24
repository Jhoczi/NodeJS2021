const http = require('http');
const fs = require('fs');
const PORT = 8080

let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    //response.write('Lab 1: Simple package example');
    fs.readFile('./pages/index.html', function(error,data){
        if (error)
        {
            response.writeHead(404);
            response.writeHead("Error: File not found");
        }
        else
        {
            response.write(data);
        }
        response.end();
    });
});

server.listen(PORT, (error) => {
    if (error)
        console.log("Somethink went wrong", error);
    else
        console.log('Server is listening on port http://localhost:%s', PORT);
});

function CensorContent()
{
    alert('test');
}