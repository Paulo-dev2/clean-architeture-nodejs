import { HttpRequest, HttpResponse } from '../../ports/http'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest, serverError, ok } from '../../helpers/http-helper'
import { Response,Request } from 'express'


export class RegisterUserController {
  private readonly registerUser: String
  private readonly sendEmailToUser: String

  constructor () {
    this.registerUser = "registerUser"
    this.sendEmailToUser = "sendEmailToUser"
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try{

        if (!httpRequest.body.username || !httpRequest.body.password) {
          const field = !httpRequest.body.name ? 'username' : 'password'
          return badRequest(new MissingParamError(field))
        }

        const {username, password} = httpRequest.body;

        const userData = {username, password}

        return ok(userData);
    }catch(err){console.log(err)}
  }
}
