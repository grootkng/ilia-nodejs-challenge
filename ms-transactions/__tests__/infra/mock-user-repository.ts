import { UserEntity } from '../../src/domain/entity/user-entity'
import { IUserUsecase } from '../../src/domain/usecases/user-usecase'

export class MockUserRepository implements IUserUsecase {
  async login(): Promise<string> {
    return 'token-string'
  }

  async findById(userId: string): Promise<UserEntity> {
    return {
      id: 'string',
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      password: 'string'
    }
  }
}
