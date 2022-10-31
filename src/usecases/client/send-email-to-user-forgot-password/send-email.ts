import { SendEmailResponse } from '@/usecases/client/send-email-to-user-with-bonus/send-email-response'
import { UserData } from '@/entities/client/forgot_password/email-user-data';

export interface SendEmail {
  sendEmailToUserForgotPassword: (user: UserData) => Promise<SendEmailResponse>
}
