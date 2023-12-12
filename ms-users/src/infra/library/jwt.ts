import jwt from 'jsonwebtoken'

import env from '../../main/config/env'
import { IAuthUsecase } from 'domain/usecases/auth-usecase'

export class TokenGenerator implements IAuthUsecase {
  public async token(email: string, password: string): Promise<string> {
    return jwt.sign({ email, password }, env.PRIVATE_KEY)
  }

  public async authApi(apiToken: string): Promise<string> {
    return jwt.sign({ apiToken }, env.PRIVATE_KEY_INTERNAL)
  }

  public async decodeToken(token: string): Promise<boolean> {
    const keys = [env.PRIVATE_KEY, env.PRIVATE_KEY_INTERNAL]

    for (const key of keys) {
      try {
        const verified = jwt.verify(token, key)
        if (verified) {
          return true
        }
      } catch (error) {
        console.error({ error })
      }
    }

    return false
  }
}
