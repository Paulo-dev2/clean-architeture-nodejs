import { RegisterUserResponse } from './register-user-response'
import { UserData } from '../../../entities/client/user/user-data'

export interface RegisterUser {
  registerUserOnMailingList: (user: UserData) => Promise<RegisterUserResponse>
}
