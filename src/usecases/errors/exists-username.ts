import { UsecaseError } from '@/usecases/errors/usecase-error';

export class UsernameError extends Error implements UsecaseError {
  constructor () {
    super('Username already exists')
    this.name = 'ErrorUsername'
  }
}
