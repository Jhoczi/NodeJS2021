class Car {
    name : string;
    color : string;
    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    public Show():void {
        console.log(`${this.name} ${this.color}`);
    }
}

class Truck extends Car {
    constructor(name: string, color: string)
    {
        super(name,color);
    }
    public Beep():void
    {
        console.log("Beep beep");
    }
}

export { Car,Truck }
