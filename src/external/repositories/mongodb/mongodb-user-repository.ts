import { UserRepository } from '../../../usecases/ports/user-repository'
import { UserData } from '../../../entities/client/user/user-data'
import { MongoHelper } from './helpers/mongo-helper'

export class MongodbUserRepository implements UserRepository {
  async findAllUsers (): Promise<any> { // Promise<UserData[]> 
     return MongoHelper.getCollection('users').find().toArray();
    /* return await MongoHelper.getCollection('users').find().toArray() */
  }

  async findUserByUsername (username: string): Promise<any>{ // Promise<UserData>
    const userCollection = MongoHelper.getCollection('users')
    const result = await userCollection.findOne({ username: username })
    return result
  }

  async add (user: UserData): Promise<void> {
    const userCollection = MongoHelper.getCollection('users')
    const exists = await this.exists(user.username)
    if (!exists) {
      await userCollection.insertOne(user)
    }
  }

  async exists (username: string): Promise<boolean> {
    const result = await this.findUserByUsername(username)
    if (result != null) {
      if (result.username === username) {
        return true
      }
    }
    return false
  }
}
