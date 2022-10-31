import { MongodbUserRepository } from '@/external/repositories/mongodb/mongodb-user-repository';
import { ForgotPasswordUserController } from '@/adapters/presentation/controllers/client/forgot_password-user-controller';
import { ForgotPasswordUser } from '@/usecases/client/user-forgot-password';
import { NodemailerEmailService } from '@/external/mail-services/nodemailler-email-service';
import { SendEmailToUserForgotPassword } from '@/usecases/client/send-email-to-user-forgot-password/send-email-to-user-forgot-password';
import { getEmailOptions } from '@/main/config/email';

 export const makeForgotPasswordUserController = (): ForgotPasswordUserController => {
  const mongodbUserRepository = new MongodbUserRepository();
  const forgotPasswordUser = new ForgotPasswordUser(mongodbUserRepository);
  const nodemailerEmailService = new NodemailerEmailService();
  const sendEmailToUserForgotPassword = new SendEmailToUserForgotPassword(getEmailOptions(),nodemailerEmailService)
  const forgotPasswordUserController = new ForgotPasswordUserController(forgotPasswordUser,sendEmailToUserForgotPassword);
  return forgotPasswordUserController;
} 