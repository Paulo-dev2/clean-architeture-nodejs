import { UserData } from '@/entities/client/forgot_password/user-data'
import { Either, left, right } from '@/shared/either'
import { InvalidUsernameError } from '@/entities/validations/errors/invalid-username'
import { UserName } from '@/entities/validations/Username'

export class Forgot {
  private constructor ( 
    public readonly username: UserName,
  ) {
    Object.freeze(this)
  }

  static password (userData: UserData): Either<InvalidUsernameError, Forgot> {
    const userNameOrError: Either<InvalidUsernameError, UserName> = UserName.create(userData.username);

    if (userNameOrError.isLeft()) return left(userNameOrError.value);
    
    const userName: UserName = userNameOrError.value;

    return right(new Forgot(userName));
  }
}
