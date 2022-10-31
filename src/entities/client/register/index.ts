import { UserData } from '@/entities/client/register/user-data'
import { Either, left, right } from '@/shared/either'
import { InvalidPasswordError } from '@/entities/validations/errors/invalid-password'
import { InvalidUsernameError } from '@/entities/validations/errors/invalid-username'
import { InvalidEmailError } from '@/entities/validations/errors/invalid-email'
import { InvalidNameError } from '@/entities/validations/errors/invalid-name'
import { InvalidPhoneError } from '@/entities/validations/errors/invalid-phone'
import { InvalidCpfError } from '@/entities/validations/errors/invalid-cpf'
import { InvalidGenderError } from '@/entities/validations/errors/invalid-gender'
import { Password } from '@/entities/validations/Password'
import { UserName } from '@/entities/validations/Username'
import { Email } from '@/entities/validations/Email'
import { Name } from '@/entities/validations/Name'
import { Cpf } from '@/entities/validations/Cpf'
import { Phone } from '@/entities/validations/Phone'
import { Gender } from '@/entities/validations/Gender'

export class User {
  private constructor ( 
    public readonly username: UserName,
    public readonly password: Password,
    public readonly email: Email,
    public readonly nome: Name,
    public readonly cpf: Cpf,
    public readonly telefone: Phone,
    public readonly gender: Gender,
  ) {
    Object.freeze(this)
  }

  static create (userData: UserData): Either<InvalidUsernameError | InvalidPasswordError, User> {
    const userNameOrError: Either<InvalidUsernameError, UserName> = UserName.create(userData.username)
    const passwordOrError: Either<InvalidPasswordError,Password> = Password.create(userData.password)
    const emailOrError: Either<InvalidEmailError, Email> = Email.create(userData.email)
    const nameOrError: Either<InvalidNameError, Name> = Name.create(userData.nome)
    const phoneOrError: Either<InvalidPhoneError, Phone> = Phone.create(userData.telefone)
    const cpfOrError: Either<InvalidCpfError, Cpf> = Cpf.create(userData.cpf)
    const genderOrError: Either<InvalidGenderError, Gender> = Gender.create(userData.gender)

    if (userNameOrError.isLeft()) return left(userNameOrError.value)
    if (passwordOrError.isLeft()) return left(passwordOrError.value)
    if (emailOrError.isLeft()) return left(emailOrError.value)
    if (nameOrError.isLeft()) return left(nameOrError.value)
    if (phoneOrError.isLeft()) return left(phoneOrError.value)
    if (cpfOrError.isLeft()) return left(cpfOrError.value)
    if (genderOrError.isLeft()) return left(genderOrError.value)
    
    const username: UserName = userNameOrError.value
    const password: Password = passwordOrError.value
    const email: Email = emailOrError.value
    const name: Name = nameOrError.value
    const phone: Phone = phoneOrError.value
    const cpf: Cpf = cpfOrError.value
    const gender: Gender = genderOrError.value

    return right(new User(username,password,email,name,cpf,phone,gender))
  }
}
