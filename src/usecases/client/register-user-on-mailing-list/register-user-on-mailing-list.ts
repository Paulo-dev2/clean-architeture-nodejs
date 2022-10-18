import { UserData } from '../../../entities/client/user/user-data'
import { UserRepository } from '../../ports/user-repository'
import { left, right, Either } from '../../../shared/either'
import { RegisterUser } from './register-user'
import { RegisterUserResponse } from './register-user-response'
import { User } from '../../../entities/client/user/user'
import { InvalidNameError } from '../../../entities/validations/errors/invalid-name'
import { InvalidPasswordError } from '../../../entities/validations/errors/invalid-password'

export class RegisterUserOnMailingList implements RegisterUser {
  private readonly userRepository: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepository = userRepo
  }

  async registerUserOnMailingList (userData: UserData): Promise<RegisterUserResponse> {

    const userOrError: Either<InvalidNameError | InvalidPasswordError, User> = User.create(userData)
    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }
    const user: User = userOrError.value
    const exists = this.userRepository.exists(user.username.value)
    if (!(await exists).valueOf()) 
      await this.userRepository.add({ username: user.username.value, password: user.password.value })
    return right(userData)
  }
}
