var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, color) {
        return _super.call(this, name, color) || this;
    }
    Truck.prototype.Beep = function () {
        console.log("Beep beep");
    };
    return Truck;
}(Car));
var car1 = new Car("Audi A4", "Srebrny");
var car2 = new Car("Ford Fusion", "Czarny");
var car3 = new Car("Honda Civic", "Niebieska");
var scania = new Truck("Scania", "Czerwona");
car1.Show();
car2.Show();
car3.Show();
scania.Beep();
