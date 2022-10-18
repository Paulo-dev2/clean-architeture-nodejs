"use strict";
exports.__esModule = true;
exports.Password = void 0;
var either_1 = require("../../shared/either");
var invalid_password_1 = require("./errors/invalid-password");
var Password = /** @class */ (function () {
    function Password(password) {
        this.password = password;
        Object.freeze(this);
    }
    Password.create = function (password) {
        if (!Password.validate(password)) {
            return either_1.left(new invalid_password_1.InvalidPasswordError(password));
        }
        return either_1.right(new Password(password));
    };
    Object.defineProperty(Password.prototype, "value", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Password.validate = function (password) {
        var tester = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!password) {
            return false;
        }
        if (password.length > 25) {
            return false;
        }
        if (!tester.test(password)) {
            return false;
        }
        return true;
    };
    return Password;
}());
exports.Password = Password;
