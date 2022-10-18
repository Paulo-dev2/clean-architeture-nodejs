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
exports.MailServiceError = void 0;
var MailServiceError = /** @class */ (function (_super) {
    __extends(MailServiceError, _super);
    function MailServiceError() {
        var _this = _super.call(this, 'Mail service error.') || this;
        _this.name = 'MailServiceError';
        return _this;
    }
    return MailServiceError;
}(Error));
exports.MailServiceError = MailServiceError;
