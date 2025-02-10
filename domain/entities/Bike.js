"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
var Bike = /** @class */ (function () {
    function Bike(id, name, price, mass, kilometers, cylinderCapacity, tankCapacity, consommation, parts) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.mass = mass;
        this.kilometers = kilometers;
        this.cylinderCapacity = cylinderCapacity;
        this.tankCapacity = tankCapacity;
        this.consommation = consommation;
        this.parts = parts;
    }
    return Bike;
}());
exports.Bike = Bike;
