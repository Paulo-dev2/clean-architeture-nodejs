import { Either } from '@/shared/either'
import { MailServiceError } from '@/usecases/errors/mail-service-error'
import { EmailOptions } from '@/usecases/ports/email-service'

export type SendEmailResponse = Either<MailServiceError, EmailOptions>
