import { Encoder } from '@/usecases/ports/encoder';
import * as bcrypt from 'bcrypt'

export class BcryptEncoder implements Encoder {

    private readonly rounds: number = 10;

    public async encode (plain: string): Promise<string> {
        return await bcrypt.hash(plain,this.rounds)
    }
    public async compare (plain: string, hashed: string): Promise<boolean> {
        return await bcrypt.compare(plain,hashed)
    }
}
