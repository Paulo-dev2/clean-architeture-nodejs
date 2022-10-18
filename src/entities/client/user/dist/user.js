"use strict";
exports.__esModule = true;
exports.User = void 0;
var Password_1 = require("../../validations/Password");
var name_1 = require("./name");
var either_1 = require("../../../shared/either");
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
        Object.freeze(this);
    }
    User.create = function (userData) {
        var nameOrError = name_1.Name.create(userData.username);
        var passwordOrError = Password_1.Password.create(userData.password);
        if (nameOrError.isLeft()) {
            return either_1.left(nameOrError.value);
        }
        if (passwordOrError.isLeft()) {
            return either_1.left(passwordOrError.value);
        }
        var name = nameOrError.value;
        var password = passwordOrError.value;
        return either_1.right(new User(name, password));
    };
    return User;
}());
exports.User = User;
