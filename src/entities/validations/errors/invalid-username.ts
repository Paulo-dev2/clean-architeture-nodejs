import { DomainError } from "@/entities/validations/errors/domain-error"

export class InvalidUsernameError extends Error implements DomainError {
  constructor (username: string) {
    super(`The username "${username}" is invalid.`)
    this.name = 'IvalidUsernameError'
  }
}
