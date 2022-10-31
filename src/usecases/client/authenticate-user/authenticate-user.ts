import { left, right, Either } from '@/shared/either';
import { UserData } from '@/entities/client/auth/user-data';
import { UserRepository } from '@/usecases/ports/user-repository';
import { Encoder } from '@/usecases/ports/encoder';
import { AuthenticateUserResponse } from '@/usecases/client/authenticate-user/authenticate-user-response';
import { Auth } from '@/entities/client/auth';
import { InvalidUsernameError } from '@/entities/validations/errors/invalid-username';
import { InvalidPasswordError } from '@/entities/validations/errors/invalid-password';
import { UsernameNotExists } from '@/usecases/errors/not-exists-username';
import { PasswordError } from '@/usecases/errors/password-error';

export class AuthenticateUser{
    constructor(
        private readonly userRepository: UserRepository,
        private readonly encoder: Encoder
    ){}

    async authenticate(userData: UserData): Promise<AuthenticateUserResponse>{

        const authOrError: Either< InvalidUsernameError | InvalidPasswordError, Auth> = Auth.authenticate(userData);
    
        if(authOrError.isLeft()) return left(authOrError.value);

        const user: Auth = authOrError.value;
        const exists = this.userRepository.exists(user.username.value);
        if(!(await exists).valueOf()) return left(new UsernameNotExists);

        const hashPassword = await this.encoder.encode(user.password.value);
        const dataUser = await this.userRepository.findUserByUsername(user.username.value);

        if(!await this.encoder.compare(hashPassword,dataUser.password)) return left(new PasswordError);

        return right(userData);

    }
}