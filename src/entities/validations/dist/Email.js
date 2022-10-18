"use strict";
exports.__esModule = true;
exports.Email = void 0;
var either_1 = require("../../shared/either");
var invalid_email_1 = require("./errors/invalid-email");
var Email = /** @class */ (function () {
    function Email(email) {
        this.email = email;
        Object.freeze(this);
    }
    Email.create = function (email) {
        if (!Email.validate(email)) {
            return either_1.left(new invalid_email_1.InvalidEmailError(email));
        }
        return either_1.right(new Email(email));
    };
    Object.defineProperty(Email.prototype, "value", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Email.validate = function (email) {
        var tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        if (!email) {
            return false;
        }
        if (email.length > 256) {
            return false;
        }
        if (!tester.test(email)) {
            return false;
        }
        var _a = email.split('@'), account = _a[0], address = _a[1];
        if (account.length > 64) {
            return false;
        }
        var domainParts = address.split('.');
        if (domainParts.some(function (part) {
            return part.length > 63;
        })) {
            return false;
        }
        return true;
    };
    return Email;
}());
exports.Email = Email;
