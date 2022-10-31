import { DomainError } from "@/entities/validations/errors/domain-error"

export class InvalidPasswordError extends Error implements DomainError {
  constructor (password: string) {
    super(`The password "${password}" is invalid.`)
    this.name = 'IvalidPasswordError'
  }
}
