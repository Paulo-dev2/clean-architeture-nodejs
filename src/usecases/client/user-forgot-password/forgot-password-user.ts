import { left, right, Either } from '@/shared/either';
import { UserData } from '@/entities/client/auth/user-data';
import { UserRepository } from '@/usecases/ports/user-repository';
import { Forgot } from '@/entities/client/forgot_password';
import { ForgotPasswordUserResponse } from '@/usecases/client/user-forgot-password/forgot-password-user-response';
import { InvalidUsernameError } from '@/entities/validations/errors/invalid-username';
import { UsernameNotExists } from '@/usecases/errors/not-exists-username';

export class ForgotPasswordUser{
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async forgot(userData: UserData): Promise<ForgotPasswordUserResponse>{

        const forgotPasswordOrError: Either<InvalidUsernameError, Forgot> = Forgot.password(userData);

        if(forgotPasswordOrError.isLeft()) return left(forgotPasswordOrError.value);

        const user: Forgot = forgotPasswordOrError.value;
        const exists = this.userRepository.exists(user.username.value);
        if(!(await exists).valueOf()) return left(new UsernameNotExists);

        const dataUser = await this.userRepository.findUserByUsername(user.username.value);

        return right(dataUser);
    }
}