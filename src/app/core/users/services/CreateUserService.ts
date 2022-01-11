import { injectable, inject } from 'tsyringe'

import { AppError } from '@/app/errors'
import type { User } from '@/app/core/users/infra/entities'
import type { CreateUser, UsersHandler } from '@/app/core/users/types'

type CreateUserResponse = {
  user: Pick<User, 'id' | 'email'>
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersHandler,
  ) {}

  public async execute(data: CreateUser): Promise<CreateUserResponse> {
    const isEmailBeenUsed = await this.usersRepository.findByEmail(data.email)

    if (isEmailBeenUsed) {
      throw new AppError('Another user already exists using this email', 490)
    }

    const { id, email } = await this.usersRepository.create(data)

    const user = { id, email }

    return {
      user,
    }
  }
}

export { CreateUserService, CreateUserResponse }
