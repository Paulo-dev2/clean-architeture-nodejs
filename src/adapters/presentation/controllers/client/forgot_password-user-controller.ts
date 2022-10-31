import { HttpRequest, HttpResponse } from '@/adapters/presentation/ports/http';
import { MissingParamError } from '@/adapters/presentation/errors/missing-param-error';
import { badRequest, serverError, ok } from '@/adapters/presentation/helpers/http-helper';
import { ShorterLengthError } from '@/adapters/presentation/errors/len-request-error';
import { ForgotPasswordUser } from "@/usecases/client/user-forgot-password";
import { ForgotPasswordUserResponse } from '@/usecases/client/user-forgot-password/forgot-password-user-response';
import { SendEmail } from '@/usecases/client/send-email-to-user-forgot-password/send-email';
import { SendEmailResponse } from '@/usecases/client/send-email-to-user-forgot-password/send-email-response';

export class ForgotPasswordUserController {
    constructor(
        private readonly forgotPasswordUser: ForgotPasswordUser,
        private readonly sendEmailToUser: SendEmail
    ){}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {

        try{
            const fields = ['username']
            const fieldsRequest = Object.keys(httpRequest.body);
    
            if (fieldsRequest.length !== fields.length)
              return badRequest(new ShorterLengthError(fields.length))
    
           for(let i:number = 0; i < fields.length; i++) {
                if(fields[i] !== fieldsRequest[i])
                return badRequest(new MissingParamError(fields[i]))
            }
    
            const {username, password, email} = httpRequest.body;
    
            const userData = {username, password, email}
    
            const forgotPasswordUserResponse: ForgotPasswordUserResponse = await this.forgotPasswordUser.forgot(userData)
    
            if (forgotPasswordUserResponse.isLeft()) {
              return badRequest(forgotPasswordUserResponse.value)
            }

            const sendEmailToUserForgotPasswordResponse: SendEmailResponse = await this.sendEmailToUser.sendEmailToUserForgotPassword({
                username: forgotPasswordUserResponse.value.username,
                nome: "Paulo Abdiel",
                email: "abdielpualo2@gmail.com"
            });

            if (sendEmailToUserForgotPasswordResponse.isLeft()) {
                return serverError(sendEmailToUserForgotPasswordResponse.value.message)
            }
    
            return ok(forgotPasswordUserResponse);
        }catch(err){console.log(err)}

    }
}