import { UsecaseError } from '@/usecases/errors/usecase-error';

export class MailServiceError extends Error implements UsecaseError {
  constructor () {
    super('Mail service error.')
    this.name = 'MailServiceError'
  }
}
