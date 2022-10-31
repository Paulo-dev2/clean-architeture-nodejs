import { Either, left, right } from '@/shared/either'
import { InvalidNameError } from '@/entities/validations/errors/invalid-name'

export class Gender {
  private readonly gender: string

  private constructor (gender: string) {
    this.gender = gender
    Object.freeze(this)
  }

  static create (gender: string): Either<InvalidNameError, Gender> {
    if (!Gender.validate(gender)) {
      return left(new InvalidNameError(gender))
    }
    return right(new Gender(gender))
  }

  get value (): string {
    return this.gender
  }

  static validate (gender: string): boolean {
    if (gender.length > 0) return true
    return false
  }
}
