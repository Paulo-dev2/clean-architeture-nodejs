import { Router } from "express";
import { makeRegisterUserController } from '@/main/factories/client/register'
import { makeAuthenticateUserController } from "@/main/factories/client/authenticate";
import { makeForgotPasswordUserController } from "@/main/factories/client/forgot-password";
import { adaptRoute } from '@/main/adapters/express-route-adapter';
import { NodemailerEmailService } from '@/external/mail-services/nodemailler-email-service';
import { SendEmailToUserWithBonus } from '@/usecases/client/send-email-to-user-with-bonus/send-email-to-user-with-bonus';

const routeClient = Router();

routeClient.post('/', adaptRoute.create(makeRegisterUserController()));
routeClient.post('/authenticate', adaptRoute.create(makeAuthenticateUserController()))
routeClient.post('/forgotPassword', adaptRoute.create(makeForgotPasswordUserController()))


export { routeClient };