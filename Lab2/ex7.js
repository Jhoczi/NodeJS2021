const fs = require("fs");
const rS = fs.createReadStream("test.txt");
const wS = fs.createWriteStream("output.txt");

rS.pipe(wS);
console.log("finish");

rS.setEncoding('utf8');

let result;
rS.on('data', (chunk) => {
    result += chunk;
});

rS.on('end',() => {
    console.log(result);
});

