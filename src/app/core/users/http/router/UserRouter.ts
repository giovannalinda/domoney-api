import { Router } from 'express'

import { CREATE_USER } from '@/routes'
import { UsersController } from '@/app/core/users/http/controllers'

const router = Router()
const usersController = new UsersController()

router.post(CREATE_USER, usersController.create)

export { router as usersRouter }
