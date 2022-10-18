import { DomainError } from "./domain-error"

export class InvalidEmailError extends Error implements DomainError {
  constructor (username: string) {
    super(`The email "${username}" is invalid.`)
    this.name = 'InvalidEmailError'
  }
}
