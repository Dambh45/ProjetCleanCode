"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
var Driver = /** @class */ (function () {
    function Driver(id, firstname, lastname, drivingLicenceNumber, drivingExperience, tests) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.drivingLicenceNumber = drivingLicenceNumber;
        this.drivingExperience = drivingExperience;
        this.tests = tests;
    }
    return Driver;
}());
exports.Driver = Driver;
