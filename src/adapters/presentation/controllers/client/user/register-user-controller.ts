import { HttpRequest, HttpResponse } from '../../ports/http';
import { MissingParamError } from '../../errors/missing-param-error';
import { badRequest, serverError, ok } from '../../helpers/http-helper';
import { RegisterUser } from '../../../../../usecases/client/register-user-on-mailing-list/register-user';
import { SendEmail } from '../../../../../usecases/client/send-email-to-user-with-bonus/send-email';
import { RegisterUserResponse } from '../../../../../usecases/client/register-user-on-mailing-list/register-user-response';
import { SendEmailResponse } from '../../../../../usecases/client/send-email-to-user-with-bonus/send-email-response';

export class RegisterUserController {
  
  constructor (
    private readonly registerUser: RegisterUser, 
    private readonly sendEmailToUser: SendEmail,
  ){}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try{
        if (!httpRequest.body.username || !httpRequest.body.password) {
          const field = !httpRequest.body.name ? 'username' : 'password'
          return badRequest(new MissingParamError(field))
        }

        const {username, password} = httpRequest.body;

        const userData = {username, password}

        const registerUserResponse: RegisterUserResponse = await this.registerUser.registerUserOnMailingList(userData)
        if (registerUserResponse.isLeft()) {
          return badRequest(registerUserResponse.value)
        }

        this.registerUser.registerUserOnMailingList(userData);
        
        const sendEmailResponse: SendEmailResponse = await this.sendEmailToUser.sendEmailToUserWithBonus(userData)
        if (sendEmailResponse.isLeft()) {
          return serverError(sendEmailResponse.value.message)
        }

        return ok(userData);
    }catch(err){console.log(err)}
  }
}
