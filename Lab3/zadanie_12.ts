const classLogger = (target) => {
    const original = target;

    const construct = (constructor, args) =>
    {
        const c: any = function ()
        {
            this.newProperty = "new property";
            return constructor.apply(this, args);
        }

        c.prototype = constructor.prototype;
        c.prototype.toString = function ()
        {
            console.log("To string: ", ... args, this.newProperty)
        }
        return new c();
    }

    const newConstructor: any = function (...args)
    {
        console.log("New: " + original.name + " " + args);
        return construct(original, args);
    }

    newConstructor.prototype = original.prototype;

    return newConstructor;
};

@classLogger
export class DecoratorPerson
{
    firstname: String;
    lastname: String;

    constructor(firstname, lastname)
    {
        this.firstname = firstname
        this.lastname = lastname
    }

    public Say(text):void
    {
        console.log(`${this.firstname} ${this.lastname} said: ${text}`);
    }
}
