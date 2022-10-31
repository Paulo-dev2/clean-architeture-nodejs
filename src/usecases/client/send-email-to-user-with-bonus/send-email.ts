import { SendEmailResponse } from '@/usecases/client/send-email-to-user-with-bonus/send-email-response'
import { UserData } from '@/entities/client/register/user-data'

export interface SendEmail {
  sendEmailToUserWithBonus: (user: UserData) => Promise<SendEmailResponse>
}
