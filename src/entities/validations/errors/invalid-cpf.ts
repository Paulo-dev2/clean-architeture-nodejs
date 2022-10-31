import { DomainError } from "@/entities/validations/errors/domain-error"

export class InvalidCpfError extends Error implements DomainError {
  constructor (cpf: string) {
    super(`The cpf "${cpf}" is invalid.`)
    this.name = 'InvalidCpfError'
  }
}
