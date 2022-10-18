import { Either, left, right } from '../../shared/either'
import { hash, compare } from 'bcrypt'
import { Encoder } from '../../usecases/ports/encoder';

export class EncoderPassword implements Encoder {
    public encode (plain: string): Promise<string> {
        const password = hash(plain,10)
        return password;
    }
    public compare (plain: string, hashed: string): Promise<boolean> {
        return
    }
}
