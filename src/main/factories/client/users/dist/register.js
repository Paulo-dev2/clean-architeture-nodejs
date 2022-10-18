"use strict";
exports.__esModule = true;
exports.makeRegisterUserController = void 0;
var register_user_controller_1 = require("../../../../adapters/presentation/controllers/client/user/register-user-controller");
var register_user_on_mailing_list_1 = require("../../../../usecases/client/register-user-on-mailing-list/register-user-on-mailing-list");
var mongodb_user_repository_1 = require("../../../../external/repositories/mongodb/mongodb-user-repository");
var nodemailler_email_service_1 = require("../../../../external/mail-services/nodemailler-email-service");
var send_email_to_user_with_bonus_1 = require("../../../../usecases/client/send-email-to-user-with-bonus/send-email-to-user-with-bonus");
var email_1 = require("../../../config/email");
exports.makeRegisterUserController = function () {
    var mongodbUserRepository = new mongodb_user_repository_1.MongodbUserRepository();
    var registerUserOnMailingList = new register_user_on_mailing_list_1.RegisterUserOnMailingList(mongodbUserRepository);
    var nodemailerEmailService = new nodemailler_email_service_1.NodemailerEmailService();
    var sendEmailToUserWithBonus = new send_email_to_user_with_bonus_1.SendEmailToUserWithBonus(email_1.getEmailOptions(), nodemailerEmailService);
    var registerUserController = new register_user_controller_1.RegisterUserController(registerUserOnMailingList, sendEmailToUserWithBonus);
    return registerUserController;
};
