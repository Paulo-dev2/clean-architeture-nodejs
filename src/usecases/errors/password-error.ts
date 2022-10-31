import { UsecaseError } from '@/usecases/errors/usecase-error';

export class PasswordError extends Error implements UsecaseError {
  constructor () {
    super('Password invalid')
    this.name = 'InvalidPassword'
  }
}
