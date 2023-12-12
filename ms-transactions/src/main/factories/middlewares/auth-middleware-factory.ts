import { Middleware } from '../../../infra/api/protocols'

import { TokenGenerator } from '../../../infra/library/jwt'
import { AuthMiddleware } from '../../../infra/api/middlewares/auth-middleware'

export const makeAuthMiddleware = (): Middleware => {
  const token = new TokenGenerator()
  return new AuthMiddleware(token)
}
