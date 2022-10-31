import { DomainError } from "@/entities/validations/errors/domain-error"

export class InvalidGenderError extends Error implements DomainError {
  constructor (gender: string) {
    super(`The gender "${gender}" is invalid.`)
    this.name = 'InvalidGenderError'
  }
}
