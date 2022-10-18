"use strict";
exports.__esModule = true;
exports.serverError = exports.ok = exports.badRequest = void 0;
var server_error_1 = require("../errors/server-error");
exports.badRequest = function (error) { return ({
    statusCode: 400,
    body: error.message
}); };
exports.ok = function (data) { return ({
    statusCode: 200,
    body: data
}); };
exports.serverError = function (reason) { return ({
    statusCode: 500,
    body: new server_error_1.ServerError(reason)
}); };
