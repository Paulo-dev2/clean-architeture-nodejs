import { Either, left, right } from '@/shared/either'
import { InvalidUsernameError } from '@/entities/validations/errors/invalid-username'

export class UserName {
  private readonly username: string

  private constructor (username: string) {
    this.username = username
    Object.freeze(this)
  }

  static create (username: string): Either<InvalidUsernameError, UserName> {
    if (!UserName.validate(username)) {
      return left(new InvalidUsernameError(username))
    }
    return right(new UserName(username))
  }

  get value (): string {
    return this.username
  }

  static validate (username: string): boolean {
    if (!username || username.trim().length < 2 || username.trim().length > 255) {
      return false
    }
    return true
  }
}
