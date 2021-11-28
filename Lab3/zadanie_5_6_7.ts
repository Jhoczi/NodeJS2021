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

let car1:Car = new Car("Audi A4","Srebrny");
let car2:Car = new Car("Ford Fusion","Czarny");
let car3:Car = new Car("Honda Civic","Niebieska");
const scania:Truck = new Truck("Scania","Czerwona");

car1.Show();
car2.Show();
car3.Show();

scania.Beep();