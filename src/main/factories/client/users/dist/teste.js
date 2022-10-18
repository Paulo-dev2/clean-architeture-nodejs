"use strict";
exports.__esModule = true;
exports.makeRegisterEmailUserController = void 0;
var teste_user_controller_1 = require("../../../../adapters/presentation/controllers/client/user/teste-user-controller");
var classRegister_1 = require("./classRegister");
exports.makeRegisterEmailUserController = function () {
    var registerEmailUserTeste = new classRegister_1.RegisterEmailUserTeste();
    var registerEmailTeste = new teste_user_controller_1.Test(registerEmailUserTeste);
    return registerEmailTeste;
};
