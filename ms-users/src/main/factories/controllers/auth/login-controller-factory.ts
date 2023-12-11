import { Controller } from '../../../../infra/api'

import { TokenGenerator } from '../../../../infra/library/jwt'
import { UserRepository } from '../../../../infra/db/repository/user-repository'
import { AuthImplementation } from '../../../../domain/implementation/auth-implementation'
import { LoginController } from '../../../../infra/api/controllers'

export const makeLoginController = (): Controller => {
  const repository = new UserRepository()
  const tokenGenerator = new TokenGenerator()
  const entity = new AuthImplementation(repository, tokenGenerator)
  return new LoginController(entity)
}
