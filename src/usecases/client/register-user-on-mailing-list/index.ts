import { RegisterUserResponse } from '@/usecases/client/register-user-on-mailing-list/register-user-response'
import { UserData } from '@/entities/client/register/user-data'

export interface RegisterUser {
  registerUserOnMailingList: (user: UserData) => Promise<RegisterUserResponse>
}
