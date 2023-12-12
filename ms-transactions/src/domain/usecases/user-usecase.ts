import { UserEntity } from 'domain/entity/user-entity'

export interface IUserUsecase {
  login?: () => Promise<string>
  findById: (userId: string) => Promise<UserEntity>
}
