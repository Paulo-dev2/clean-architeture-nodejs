import { Either } from '../../../shared/either'
import { UserData } from '../../../entities/client/auth/user-data'
import { InvalidPasswordError } from '../../../entities/validations/errors/invalid-password'
import { InvalidUsernameError } from '../../../entities/validations/errors/invalid-username'

export type AuthenticateUserResponse = Either< InvalidUsernameError | InvalidPasswordError , UserData>
