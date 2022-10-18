"use strict";
exports.__esModule = true;
exports.UserName = void 0;
var either_1 = require("../../shared/either");
var invalid_username_1 = require("./errors/invalid-username");
var UserName = /** @class */ (function () {
    function UserName(username) {
        this.username = username;
        Object.freeze(this);
    }
    UserName.create = function (username) {
        if (!UserName.validate(username)) {
            return either_1.left(new invalid_username_1.InvalidUsernameError(username));
        }
        return either_1.right(new UserName(username));
    };
    Object.defineProperty(UserName.prototype, "value", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    UserName.validate = function (username) {
        if (!username || username.trim().length < 2 || username.trim().length > 255) {
            return false;
        }
        return true;
    };
    return UserName;
}());
exports.UserName = UserName;
