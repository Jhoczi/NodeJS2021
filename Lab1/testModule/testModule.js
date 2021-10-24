let cWords = ["smutny", "niedobry", "szalony"];
let ccWords = [];

function censor(inStr)
{
    for (idx in cWords)
        inStr = inStr.replace(cWords[idx],"****");
    for (idx in ccWords)
        inStr = inStr.replace(ccWords[idx],"****");
    return inStr;
}

function addCWord(word)
{
    ccWords.push(word);
}
function getCWord()
{
    return cWords.concat(ccWords);
}

// Export:
exports.censor = censor;
exports.addCWord = addCWord;
exports.getCWord = getCWord;
