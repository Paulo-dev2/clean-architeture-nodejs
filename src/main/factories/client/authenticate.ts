import { MongodbUserRepository } from '@/external/repositories/mongodb/mongodb-user-repository';
import { BcryptEncoder } from '@/external/encoder/bcrypt-encoder';
import { AuthenticateUser } from '@/usecases/client/authenticate-user';
import { AuthenticateUserController } from '@/adapters/presentation/controllers/client/authenticate-user-controller';

 export const makeAuthenticateUserController = (): AuthenticateUserController => {
  const mongodbUserRepository = new MongodbUserRepository();
  const bcryptEncoder = new BcryptEncoder();
  const authenticateUser = new AuthenticateUser(mongodbUserRepository,bcryptEncoder);
  const authenticateUserController = new AuthenticateUserController(authenticateUser);
  return authenticateUserController;
} 
