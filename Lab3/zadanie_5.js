var Car = /** @class */ (function () {
    function Car(name, color) {
        this.name = name;
        this.color = color;
    }
    Car.prototype.Show = function () {
        console.log(this.name + " " + this.color);
    };
    return Car;
}());
var car1 = new Car("Audi A4", "Srebrny");
var car2 = new Car("Ford Fusion", "Czarny");
var car3 = new Car("Honda Civic", "Niebieska");
car1.Show();
car2.Show();
car3.Show();
