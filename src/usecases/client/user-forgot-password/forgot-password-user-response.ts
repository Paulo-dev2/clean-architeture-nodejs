import { Either } from '@/shared/either'
import { UserData } from '@/entities/client/auth/user-data'
import { InvalidUsernameError } from '@/entities/validations/errors/invalid-username'

export type ForgotPasswordUserResponse = Either<InvalidUsernameError, UserData>
