let censorModule = require("./testModule/testModule");

console.log(censorModule.getCWord());

let description = "Jest mily gdyby nie był smutny, pochmurny, niedobry i szalony dzien";

console.log(description);
console.log(censorModule.censor(description));
censorModule.addCWord("ponury");
console.log(censorModule.getCWord());

let description2 = "Jest milo gdyby nie ponury, smutny, pochmurny, niedobry i szalony dzien";
console.log(description2);
console.log(censorModule.censor(description2));