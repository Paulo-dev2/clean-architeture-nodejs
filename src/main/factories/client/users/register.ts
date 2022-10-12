import { RegisterUserController } from '../../../../adapters/presentation/controllers/client/user/register-user-controller'


export const makeRegisterUserController = (): RegisterUserController => {
  const registerUserController = new RegisterUserController();
  return registerUserController;
}
