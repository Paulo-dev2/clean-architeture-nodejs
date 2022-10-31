import { Either, left, right } from '@/shared/either'
import { InvalidPhoneError } from '@/entities/validations/errors/invalid-phone';


export class Phone{
    private readonly phone: string;
    
    constructor(phone: string) {
        this.phone = phone;
        Object.freeze(this);
    }

    static create(phone: string): Either<InvalidPhoneError, Phone>{
        if(!Phone.validate(phone)) return left(new InvalidPhoneError(phone));
        return right(new Phone(phone))
    }

    get value (): string {
        return this.phone;
    }

    static validate (phone:string) : boolean{
        var tester = /^\(?(\d{2})\)?[- ]?(\d{5})[- ]?(\d{4})$/

        if (!phone) return false;

        if (phone.length !== 15) return false;

        if (!tester.test(phone)) return false;

        return true
    }
}