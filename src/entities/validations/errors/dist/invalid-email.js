"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.InvalidEmailError = void 0;
var InvalidEmailError = /** @class */ (function (_super) {
    __extends(InvalidEmailError, _super);
    function InvalidEmailError(username) {
        var _this = _super.call(this, "The email \"" + username + "\" is invalid.") || this;
        _this.name = 'InvalidEmailError';
        return _this;
    }
    return InvalidEmailError;
}(Error));
exports.InvalidEmailError = InvalidEmailError;
