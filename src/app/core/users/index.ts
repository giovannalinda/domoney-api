import { container } from 'tsyringe'
import { UsersRepository } from '@/app/core/users/infra/repositories'

import { UsersHandler } from '@/app/core/users/types'

container.registerSingleton<UsersHandler>('UsersRepository', UsersRepository)
