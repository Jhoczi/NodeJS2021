const events = require("events");
const emitter = new events.EventEmitter();

class Person
{
    constructor(firstname)
    {
        this.firstname = firstname;
    }
    ChangeName(value)
    {
        this.firstname = value;
        emitter.emit("changeName",this);
    }
}

let person = new Person("Janusz");

emitter.on("changeName",() => {
    console.log(`Witaj ${person.firstname}`)
});

person.ChangeName("Damian");