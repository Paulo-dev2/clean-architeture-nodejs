import { ControllerError } from "@/adapters/presentation/errors/controller-error"

export class ShorterLengthError extends Error implements ControllerError {
  constructor (lenParams: number) {
    super(`Shorter length: requires ${lenParams} params`)
    this.name = 'ShorterLengthError'
  }
}
