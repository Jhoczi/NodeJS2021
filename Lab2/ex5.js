let jsonString = `[{
    "name":"Szymon",
    "surname":"Damek"
},
{
    "name":"Damian",
    "surname":"Grygierzec"
}]`;
let jsonFile = JSON.parse(jsonString);

jsonFile.forEach(element => {
        console.log(element.name);
});

jsonFile.push({
    name:"Tomasz",
    surname:"Tomaszewski"
});
console.log("+===============+");

jsonFile.forEach(element => {
    console.log(element.name);
});

jsonString = JSON.stringify(jsonFile);

console.log(jsonString);