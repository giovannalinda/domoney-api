import { Router } from 'express'

import { UPDATE_USER_PROFILE } from '@/routes'
import { validBodyBySchema } from '@/lib/schema'

import { verifyAuthentication } from '@/app/interceptors'
import { ProfileController } from '@/app/core/users/http/controllers'

import { updateUserProfileSchema } from '@/app/core/users/types'

const router = Router()
const profileController = new ProfileController()

router.use(verifyAuthentication)

router.put(
  UPDATE_USER_PROFILE,
  validBodyBySchema(updateUserProfileSchema),
  profileController.update,
)

export { router as profileRouter }
