import { EmailService, EmailOptions } from '../../ports/email-service'
import { MailServiceError } from '../../errors/mail-service-error'
import { SendEmailResponse } from './send-email-response'
import { right, left, Either } from '../../../shared/either'
import { SendEmail } from './send-email'
import { UserData } from '../../../entities/client/user/user-data'
import { User } from '../../../entities/client/user/user'
import { InvalidNameError } from '../../../entities/validations/errors/invalid-name';
import { InvalidEmailError } from '../../../entities/validations/errors/invalid-email'

export class SendEmailToUserWithBonus implements SendEmail {
  private readonly mailService: EmailService
  private readonly mailOptions: EmailOptions
  constructor (mailOptions: EmailOptions, mailService: EmailService) {
    this.mailOptions = mailOptions
    this.mailService = mailService
  }

  async sendEmailToUserWithBonus (userData: UserData): Promise<SendEmailResponse> {
    /* const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create(userData)
    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }
    const user: User = userOrError.value */
    const user = userData;
    const greetings = 'E aí <b>' + user.username + '</b>, beleza?'
    const customizedHtml = greetings + '<br> <br>' + this.mailOptions.html
    const options = {
      host: this.mailOptions.host,
      port: this.mailOptions.port,
      username: this.mailOptions.username,
      password: this.mailOptions.password,
      from: this.mailOptions.from,
     /*  to: user.name.value + '<' + user.email.value + '>', */
       to: 'teste <abdielpaulo2@gmail.com>',
      subject: this.mailOptions.subject,
      text: this.mailOptions.text,
      html: customizedHtml,
      attachments: this.mailOptions.attachments
    }
    /* const sent: Either<MailServiceError, EmailOptions> = await this.mailService.send(options) */
    const sent = await this.mailService.send(options)
   /*  if (sent.isLeft()) {
      return left(new MailServiceError())
    } */
    return right(options)
  }
}
