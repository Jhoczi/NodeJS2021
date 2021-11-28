"use strict";
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
exports.__esModule = true;
exports.Truck = exports.Car = void 0;
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
exports.Car = Car;
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
exports.Truck = Truck;
