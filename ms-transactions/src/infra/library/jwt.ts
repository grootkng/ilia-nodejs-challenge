import jwt from 'jsonwebtoken'

import env from '../../main/config/env'
import { IAuthUsecase } from 'domain/usecases/auth-usecase'

export class TokenGenerator implements IAuthUsecase {
  public async token(email: string, password: string): Promise<string> {
    return jwt.sign({ email, password }, env.PRIVATE_KEY)
  }

  public async decodeToken(token: string): Promise<boolean> {
    const verified = jwt.verify(token, env.PRIVATE_KEY)
    return !!verified
  }
}
