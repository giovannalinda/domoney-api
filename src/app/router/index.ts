import { Router } from 'express'

import { usersRouter } from '@/app/core/users/http/router'

const router = Router()

router.use(usersRouter)

export { router }
