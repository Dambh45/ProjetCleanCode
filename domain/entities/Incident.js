"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
var Incident = /** @class */ (function () {
    function Incident(id, type, description, driver) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.driver = driver;
    }
    return Incident;
}());
exports.Incident = Incident;
