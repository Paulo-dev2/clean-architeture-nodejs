import { UserData } from '@/entities/client/register/user-data'
import { UserRepository } from '@/usecases/ports/user-repository'
import { left, right, Either } from '@/shared/either'
import { RegisterUser } from '@/usecases/client/register-user-on-mailing-list'
import { RegisterUserResponse } from '@/usecases/client/register-user-on-mailing-list/register-user-response'
import { User } from '@/entities/client/register'
import { InvalidNameError } from '@/entities/validations/errors/invalid-name'
import { InvalidPasswordError } from '@/entities/validations/errors/invalid-password'
import { UsernameError } from '@/usecases/errors/exists-username'
import { Encoder } from '@/usecases/ports/encoder'

export class RegisterUserOnMailingList implements RegisterUser {
  private readonly userRepository: UserRepository
  private readonly encoder: Encoder

  constructor (userRepo: UserRepository, encoder: Encoder) {
    this.userRepository = userRepo
    this.encoder = encoder
  }

  async registerUserOnMailingList (userData: UserData): Promise<RegisterUserResponse> {

    const userOrError: Either<InvalidNameError | InvalidPasswordError, User> = User.create(userData)
    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }
    const user: User = userOrError.value
    const exists = this.userRepository.exists(user.username.value)
    if ((await exists).valueOf()) 
      return left(new UsernameError)  
    
    const passwordEncoder= await this.encoder.encode(user.password.value);

    await this.userRepository.add(
      { 
        username: user.username.value,
        password: passwordEncoder,
        email: user.email.value,
        nome: user.nome.value,
        cpf: user.cpf.value,
        telefone: user.telefone.value,
        gender: user.gender.value
      }
    );
    
    return right(userData)
  }
}
