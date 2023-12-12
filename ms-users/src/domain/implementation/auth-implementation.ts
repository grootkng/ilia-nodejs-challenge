import { AuthEntity } from 'domain/entity/auth-entity'
import { IAuthUsecase } from 'domain/usecases/auth-usecase'
import { IUserUsecase } from 'domain/usecases/user-usecase'

import env from '../../main/config/env'

export class AuthImplementation implements IAuthUsecase {
  constructor(private readonly userRepository: IUserUsecase, private readonly tokenGenerator: IAuthUsecase) { }

  public async auth(email: string, password: string): Promise<AuthEntity> {
    try {
      const user = await this.userRepository.findByEmail(email, password)
      if (!user) {
        return null
      }

      const accessToken = await this.tokenGenerator.token(email, password)
      return {
        user: user,
        access_token: accessToken
      }
    } catch (error) {
      console.error({ error })
      throw error
    }
  }

  public async authApi(apiToken: string): Promise<string> {
    try {
      if (apiToken !== env.DEFAULT_API_TOKEN) {
        return null
      }

      return await this.tokenGenerator.authApi(apiToken)
    } catch (error) {
      console.error({ error })
      throw error
    }
  }
}
