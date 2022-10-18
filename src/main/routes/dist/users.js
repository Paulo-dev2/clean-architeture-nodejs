"use strict";
exports.__esModule = true;
exports.routeCient = void 0;
var express_1 = require("express");
var register_1 = require("../factories/client/users/register");
var express_route_adapter_1 = require("../adapters/express-route-adapter");
var routeCient = express_1.Router();
exports.routeCient = routeCient;
routeCient.post('/', express_route_adapter_1.adaptRoute.create(register_1.makeRegisterUserController()));
