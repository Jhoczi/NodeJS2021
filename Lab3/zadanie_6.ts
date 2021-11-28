class Car {
    name : string;
    color : string;
    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}

let car1:Car = new Car("Audi A4","Srebrny");
let car2:Car = new Car("Ford Fusion","Czarny");
let car3:Car = new Car("Honda Civic","Niebieska");

console.log(car1);
console.log(car2);
console.log(car3);