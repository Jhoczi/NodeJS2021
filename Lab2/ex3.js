const events = require("events");

const EventEmiFunction = () => {
    console.log("New task");
};

const eventEmi = new events.EventEmitter();

eventEmi.on('request',EventEmiFunction);

eventEmi.emit("request");
