"use strict";
exports.__esModule = true;
exports.Name = void 0;
var either_1 = require("../../../shared/either");
var invalid_name_1 = require("./errors/invalid-name");
var Name = /** @class */ (function () {
    function Name(name) {
        this.name = name;
        Object.freeze(this);
    }
    Name.create = function (name) {
        if (!Name.validate(name)) {
            return either_1.left(new invalid_name_1.InvalidNameError(name));
        }
        return either_1.right(new Name(name));
    };
    Object.defineProperty(Name.prototype, "value", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Name.validate = function (name) {
        if (!name || name.trim().length < 2 || name.trim().length > 255) {
            return false;
        }
        return true;
    };
    return Name;
}());
exports.Name = Name;
