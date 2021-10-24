
let http = require('http');
// Port Definition:
const PORT = 8080;
// Run web server:
let server = http.createServer((request, response) => {

});

// Run server:
server.listen(PORT, () => {
    console.log("Server listening on: http://localhost:%s", PORT);
});
