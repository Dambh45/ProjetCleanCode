"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incidentsRelations = exports.testsRelations = exports.driversRelations = exports.incidentTable = exports.testTable = exports.driverTable = void 0;
var sqlite_core_1 = require("drizzle-orm/sqlite-core");
var drizzle_orm_1 = require("drizzle-orm");
exports.driverTable = (0, sqlite_core_1.sqliteTable)('drivers', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    firstname: (0, sqlite_core_1.text)('firstname').notNull(),
    lastname: (0, sqlite_core_1.text)('lastname').notNull(),
    drivingLicenceNumber: (0, sqlite_core_1.integer)('driving_licence_number').notNull(),
    drivingExperience: (0, sqlite_core_1.integer)('driving_experience').notNull(),
});
exports.testTable = (0, sqlite_core_1.sqliteTable)('tests', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    bikeId: (0, sqlite_core_1.integer)('bike_id').notNull(),
    driverId: (0, sqlite_core_1.integer)('driver_id').notNull().references(function () { return exports.driverTable.id; }),
    loanStartDate: (0, sqlite_core_1.text)('loan_start_date').notNull(),
    loanEndDate: (0, sqlite_core_1.text)('loan_end_date').notNull(),
});
exports.incidentTable = (0, sqlite_core_1.sqliteTable)('incidents', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    type: (0, sqlite_core_1.text)('type').notNull(),
    description: (0, sqlite_core_1.text)('description').notNull(),
    driverId: (0, sqlite_core_1.integer)('driver_id').notNull().references(function () { return exports.driverTable.id; }),
});
exports.driversRelations = (0, drizzle_orm_1.relations)(exports.driverTable, function (_a) {
    var many = _a.many;
    return ({
        tests: many(exports.testTable),
        incidents: many(exports.incidentTable),
    });
});
exports.testsRelations = (0, drizzle_orm_1.relations)(exports.testTable, function (_a) {
    var one = _a.one;
    return ({
        driver: one(exports.driverTable, {
            fields: [exports.testTable.driverId],
            references: [exports.driverTable.id],
        }),
    });
});
exports.incidentsRelations = (0, drizzle_orm_1.relations)(exports.incidentTable, function (_a) {
    var one = _a.one;
    return ({
        driver: one(exports.driverTable, {
            fields: [exports.incidentTable.driverId],
            references: [exports.driverTable.id],
        }),
    });
});
