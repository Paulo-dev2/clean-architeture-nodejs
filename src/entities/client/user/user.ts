import { UserData } from './user-data'
import { Password } from '../../validations/Password'
import { Name } from './name'
import { Either, left, right } from '../../../shared/either'
import { InvalidPasswordError } from '../../validations/errors/invalid-password'
import { InvalidUsernameError } from '../../validations/errors/invalid-username'

export class User {
  public readonly username: Name
  public readonly password: Password

  private constructor (username: Name, password: Password) {
    this.username = username
    this.password = password
    Object.freeze(this)
  }

  static create (userData: UserData): Either<InvalidUsernameError | InvalidPasswordError, User> {
    const nameOrError: Either<InvalidUsernameError, Name> = Name.create(userData.username)
    const passwordOrError: Either<InvalidPasswordError,Password> = Password.create(userData.password)
    if (nameOrError.isLeft()) {
      return left(nameOrError.value)
    }
    if (passwordOrError.isLeft()) {
      return left(passwordOrError.value)
    }
    const name: Name = nameOrError.value
    const password: Password = passwordOrError.value
    return right(new User(name,password))
  }
}
