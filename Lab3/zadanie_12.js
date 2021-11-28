"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.DecoratorPerson = void 0;
var classLogger = function (target) {
    var original = target;
    var construct = function (constructor, args) {
        var c = function () {
            this.newProperty = "new property";
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        c.prototype.toString = function () {
            console.log.apply(console, __spreadArray(__spreadArray(["To string: "], args, false), [this.newProperty], false));
        };
        return new c();
    };
    var newConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("New: " + original.name + " " + args);
        return construct(original, args);
    };
    newConstructor.prototype = original.prototype;
    return newConstructor;
};
var DecoratorPerson = /** @class */ (function () {
    function DecoratorPerson(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    DecoratorPerson.prototype.Say = function (text) {
        console.log("".concat(this.firstname, " ").concat(this.lastname, " said: ").concat(text));
    };
    DecoratorPerson = __decorate([
        classLogger
    ], DecoratorPerson);
    return DecoratorPerson;
}());
exports.DecoratorPerson = DecoratorPerson;
