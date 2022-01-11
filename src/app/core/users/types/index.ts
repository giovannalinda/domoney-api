import { User } from '@/app/core/users/infra/entities/User'

type CreateUser = Pick<User, 'email' | 'password'>

type UsersHandler = {
  create(data: CreateUser): Promise<User>
  deleteById(id: string): Promise<void>
  findById(id: string): Promise<User | undefined>
  save(user: User): Promise<User>
}

export { UsersHandler, CreateUser }
