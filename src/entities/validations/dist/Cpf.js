"use strict";
exports.__esModule = true;
exports.Cpf = void 0;
var either_1 = require("../../shared/either");
var invalid_password_1 = require("./errors/invalid-password");
var Cpf = /** @class */ (function () {
    function Cpf(password) {
        this.password = password;
        Object.freeze(this);
    }
    Cpf.create = function (password) {
        if (!Cpf.validate(password)) {
            return either_1.left(new invalid_password_1.InvalidPasswordError(password));
        }
        return either_1.right(new Cpf(password));
    };
    Object.defineProperty(Cpf.prototype, "value", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Cpf.validate = function (cpf) {
        var tester = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!cpf) {
            return false;
        }
        if (cpf.length == 15) {
            return false;
        }
        if (!tester.test(cpf)) {
            return false;
        }
        return true;
    };
    return Cpf;
}());
exports.Cpf = Cpf;
