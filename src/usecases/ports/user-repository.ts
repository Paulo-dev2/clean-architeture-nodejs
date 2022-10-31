import { UserData } from '@/entities/client/register/user-data'

export interface UserRepository {
  findAllUsers: () => Promise<any> // Promise<UserData[]> 
  findUserByUsername: (username: string) => Promise<any> // Promise<UserData>
  add: (user: UserData) => Promise<void>
  exists: (username: string) => Promise<boolean>
}
