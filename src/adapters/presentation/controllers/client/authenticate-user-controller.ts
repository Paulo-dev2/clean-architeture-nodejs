import { HttpRequest, HttpResponse } from '@/adapters/presentation/ports/http';
import { MissingParamError } from '@/adapters/presentation/errors/missing-param-error';
import { badRequest, serverError, ok } from '@/adapters/presentation/helpers/http-helper';
import { ShorterLengthError } from '@/adapters/presentation/errors/len-request-error';
import { AuthenticateUserResponse } from '@/usecases/client/authenticate-user/authenticate-user-response';
import { AuthenticateUser } from '@/usecases/client/authenticate-user';

export class AuthenticateUserController {
  
  constructor (
    private readonly authenticateUser: AuthenticateUser
  ){}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try{
        const fields = ['username','password']
        const fieldsRequest = Object.keys(httpRequest.body);

        if (fieldsRequest.length !== fields.length)
          return badRequest(new ShorterLengthError(fields.length))

       for(let i:number = 0; i < fields.length; i++) {
        if(fields[i] !== fieldsRequest[i])
          return badRequest(new MissingParamError(fields[i]))
       }

        const {username, password} = httpRequest.body;

        const userData = {username, password}

        const authenticateUserResponse: AuthenticateUserResponse = await this.authenticateUser.authenticate(userData)

        if (authenticateUserResponse.isLeft()) 
          return badRequest(authenticateUserResponse.value)

        return ok(userData);
    }catch(err){console.log(err)}
  }
}
