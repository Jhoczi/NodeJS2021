let censorModule = require("./testModule/testModule");
let Filter = require('bad-words'),
    filter = new Filter();

// Damek zostalo dodane jako slowo do cenzorowania
censorModule.addCWord("unkind");
let example = "Don't be a Simon Damek, because he is very unkind.";
let censoredExample = filter.clean(censorModule.censor(example));
console.log(censoredExample);