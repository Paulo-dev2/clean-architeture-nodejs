import { HttpRequest, HttpResponse } from '@/adapters/presentation/ports/http';
import { MissingParamError } from '@/adapters/presentation/errors/missing-param-error';
import { badRequest, serverError, ok } from '@/adapters/presentation/helpers/http-helper';
import { RegisterUser } from '@/usecases/client/register-user-on-mailing-list';
import { SendEmail } from '@/usecases/client/send-email-to-user-with-bonus/send-email';
import { RegisterUserResponse } from '@/usecases/client/register-user-on-mailing-list/register-user-response';
import { SendEmailResponse } from '@/usecases/client/send-email-to-user-with-bonus/send-email-response';
import { ShorterLengthError } from '@/adapters/presentation/errors/len-request-error';

export class RegisterUserController {
  
  constructor (
    private readonly registerUser: RegisterUser, 
    private readonly sendEmailToUser: SendEmail,
  ){}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try{
        const fields = ['username','password','email','nome','cpf','telefone','gender']
        const fieldsRequest = Object.keys(httpRequest.body);

        if (fieldsRequest.length !== fields.length)
          return badRequest(new ShorterLengthError(fields.length))

       for(let i:number = 0; i < fields.length; i++) {
        if(fields[i] !== fieldsRequest[i])
          return badRequest(new MissingParamError(fields[i]))
       }

        const {username, password,email,nome,cpf,telefone,gender} = httpRequest.body;

        const userData = {username, password,email,nome,cpf,telefone,gender}

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
