import { Either } from '../../../shared/either'
import { UserData } from '../../../entities/client/user/user-data'
import { InvalidPasswordError } from '../../../entities/validations/errors/invalid-password'
import { InvalidUsernameError } from '../../../entities/validations/errors/invalid-username'

export type RegisterUserResponse = Either<InvalidUsernameError | InvalidPasswordError, UserData>
