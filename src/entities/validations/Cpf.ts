import { Either, left, right } from '../../shared/either'
import { InvalidPasswordError } from './errors/invalid-password'

export class Cpf {
  private readonly password: string

  private constructor (password: string) {
    this.password = password
    Object.freeze(this)
  }

  static create (password: string): Either<InvalidPasswordError, Cpf> {
    if (!Cpf.validate(password)) {
      return left(new InvalidPasswordError(password))
    }
    return right(new Cpf(password))
  }

  get value (): string {
    return this.password
  }

  static validate (cpf: string): boolean {
    var tester = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if (!cpf) {
      return false
    }
    if (cpf.length == 15) {
      return false
    }
    if (!tester.test(cpf)) {
      return false
    }
    return true
  }
}
