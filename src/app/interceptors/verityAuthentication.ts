import { NextFunction, Request, Response } from 'express'

import { AppError } from '@/lib'
import { AuthProviderInstance } from '@/app/providers/AuthProvider'

export function verifyAuthentication(
  request: Request,
  _: Response,
  next: NextFunction,
) {
  const authProvider = new AuthProviderInstance()

  const authorization = request.headers.authorization

  if (!authorization) {
    throw new AppError('JWT token is missing', 404)
  }

  if (!authorization.includes(' ')) {
    throw new AppError('Invalid token. Please try again.', 401)
  }

  const [, token] = authorization.split(' ')

  const decoded = authProvider.verifyToken(token)

  request.user_id = decoded

  return next()
}
