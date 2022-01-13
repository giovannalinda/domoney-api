import { sign, verify } from 'jsonwebtoken'

import { AppError } from '@/lib'
import { AuthProvider, TokenPayload } from '@/app/providers/AuthProvider/types'

const JWT_SECRET = process.env.JWT_SECRET
class JWTAuthProvider implements AuthProvider {
  public generateToken(payload: string) {
    return sign({ id: payload }, JWT_SECRET, {
      subject: payload,
      expiresIn: '1d',
    })
  }

  public verifyToken(token: string): string {
    try {
      const { sub } = verify(token, JWT_SECRET) as TokenPayload

      return sub
    } catch {
      throw new AppError('Invalid token. Please create new session.', 401)
    }
  }
}

export { JWTAuthProvider }
