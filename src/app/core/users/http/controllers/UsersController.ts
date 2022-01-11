import { container } from 'tsyringe'
import type { Request, Response } from 'express'

import { CreateUserService } from '@/app/core/users/services'

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const createUser = container.resolve(CreateUserService)

    const user = await createUser.execute({
      email,
      password,
    })

    return response.json({
      user,
    })
  }
}

export { UsersController }
