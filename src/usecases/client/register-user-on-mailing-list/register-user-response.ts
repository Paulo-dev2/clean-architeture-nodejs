import { Either } from '../../../shared/either'
import { UserData } from '../../../entities/client/register/user-data'
import { InvalidPasswordError } from '../../../entities/validations/errors/invalid-password'
import { InvalidUsernameError } from '../../../entities/validations/errors/invalid-username'
import { InvalidEmailError } from '../../../entities/validations/errors/invalid-email'
import { InvalidNameError } from '../../../entities/validations/errors/invalid-name'
import { InvalidPhoneError } from '../../../entities/validations/errors/invalid-phone'
import { InvalidCpfError } from '../../../entities/validations/errors/invalid-cpf'
import { InvalidGenderError } from '../../../entities/validations/errors/invalid-gender'

export type RegisterUserResponse = Either<
                                    InvalidUsernameError | 
                                    InvalidPasswordError | 
                                    InvalidEmailError    |
                                    InvalidNameError     |
                                    InvalidPhoneError    |
                                    InvalidCpfError      |    
                                    InvalidGenderError, 
                                    UserData>
