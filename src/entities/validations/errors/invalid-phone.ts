import { DomainError } from "@/entities/validations/errors/domain-error"

export class InvalidPhoneError extends Error implements DomainError {
  constructor (name: string) {
    super(`The phone "${name}" is invalid.`)
    this.name = 'InvalidPhoneError'
  }
}
