"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.client = void 0;
var client_1 = require("@libsql/client");
var libsql_1 = require("drizzle-orm/libsql");
exports.client = (0, client_1.createClient)({ url: "file:triumphmotorcycle.sqlite" });
exports.database = (0, libsql_1.drizzle)(exports.client);
