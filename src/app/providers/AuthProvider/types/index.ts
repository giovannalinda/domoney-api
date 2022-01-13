type AuthProvider = {
  generateToken: (payload: string) => string
  verifyToken: (token: string) => string | TokenPayload
}

type TokenPayload = {
  sub: string
}

export { AuthProvider, TokenPayload }
