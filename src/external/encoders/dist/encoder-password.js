"use strict";
exports.__esModule = true;
exports.EncoderPassword = void 0;
var bcrypt_1 = require("bcrypt");
var EncoderPassword = /** @class */ (function () {
    function EncoderPassword() {
    }
    EncoderPassword.prototype.encode = function (plain) {
        var password = bcrypt_1.hash(plain, 10);
        return password;
    };
    EncoderPassword.prototype.compare = function (plain, hashed) {
        return;
    };
    return EncoderPassword;
}());
exports.EncoderPassword = EncoderPassword;
