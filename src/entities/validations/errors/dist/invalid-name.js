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
exports.InvalidNameError = void 0;
var InvalidNameError = /** @class */ (function (_super) {
    __extends(InvalidNameError, _super);
    function InvalidNameError(name) {
        var _this = _super.call(this, "The name \"" + name + "\" is invalid.") || this;
        _this.name = 'InvalidNameError';
        return _this;
    }
    return InvalidNameError;
}(Error));
exports.InvalidNameError = InvalidNameError;
