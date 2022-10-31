import { RegisterUserController } from '@/adapters/presentation/controllers/client/register-user-controller';
import { RegisterUserOnMailingList } from '@/usecases/client/register-user-on-mailing-list/register-user-on-mailing-list';
import { MongodbUserRepository } from '@/external/repositories/mongodb/mongodb-user-repository';
import { BcryptEncoder } from '@/external/encoder/bcrypt-encoder';
import { NodemailerEmailService } from '@/external/mail-services/nodemailler-email-service';
import { SendEmailToUserWithBonus } from '@/usecases/client/send-email-to-user-with-bonus/send-email-to-user-with-bonus';
import { getEmailOptions } from '@/main/config/email';

 export const makeRegisterUserController = (): RegisterUserController => {
  const mongodbUserRepository = new MongodbUserRepository();
  const bcryptEncoder = new BcryptEncoder();
  const registerUserOnMailingList = new RegisterUserOnMailingList(mongodbUserRepository,bcryptEncoder);
  const nodemailerEmailService = new NodemailerEmailService();
  const sendEmailToUserWithBonus = new SendEmailToUserWithBonus(getEmailOptions(),nodemailerEmailService)
  const registerUserController = new RegisterUserController(registerUserOnMailingList,sendEmailToUserWithBonus);
  return registerUserController;
} 
