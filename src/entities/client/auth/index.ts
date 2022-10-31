import { UserData } from '@/entities/client/auth/user-data'
import { Either, left, right } from '@/shared/either'
import { InvalidPasswordError } from '@/entities/validations/errors/invalid-password'
import { InvalidUsernameError } from '@/entities/validations/errors/invalid-username'
import { Password } from '@/entities/validations/Password'
import { UserName } from '@/entities/validations/Username'

export class Auth {
  private constructor ( 
    public readonly username: UserName,
    public readonly password: Password
  ) {
    Object.freeze(this)
  }

  static authenticate (userData: UserData): Either<InvalidUsernameError | InvalidPasswordError, Auth> {
    const userNameOrError: Either<InvalidUsernameError, UserName> = UserName.create(userData.username)
    const passwordOrError: Either<InvalidPasswordError,Password> = Password.create(userData.password)
    if (userNameOrError.isLeft()) return left(userNameOrError.value)
    if (passwordOrError.isLeft()) return left(passwordOrError.value)
    
    const username: UserName = userNameOrError.value
    const password: Password = passwordOrError.value

    return right(new Auth(username,password))
  }
}
