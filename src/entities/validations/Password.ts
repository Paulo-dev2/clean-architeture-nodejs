import { Either, left, right } from '@/shared/either'
import { InvalidPasswordError } from '@/entities/validations/errors/invalid-password'

export class Password {
  private readonly password: string

  private constructor (password: string) {
    this.password = password
    Object.freeze(this)
  }

  static create (password: string): Either<InvalidPasswordError, Password> {
    if (!Password.validate(password)) {
      return left(new InvalidPasswordError(password))
    }
    return right(new Password(password))
  }

  get value (): string {
    return this.password
  }

  static validate (password: string): boolean {
    var tester = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (!password) {
      return false
    }
    if (password.length > 25) {
      return false
    }
    if (!tester.test(password)) {
      return false
    }
    return true
  }
}
