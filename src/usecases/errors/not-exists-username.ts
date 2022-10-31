import { UsecaseError } from '@/usecases/errors/usecase-error';

export class UsernameNotExists extends Error implements UsecaseError {
  constructor () {
    super('Username not exists')
    this.name = 'UsernameNotExists'
  }
}
