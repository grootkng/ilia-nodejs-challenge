import { UserEntity } from 'domain/entity/user-entity'

export interface IUserUsecase {
  create: (payload: UserEntity) => Promise<void>
  findAll: () => Promise<UserEntity[]>
  findBy: (id: string) => Promise<UserEntity>
  deleteBy: (id: string) => Promise<void>
  updateBy: (id: string, payload: UserEntity) => Promise<void>
  findByEmail?: (email: string, password: string) => Promise<UserEntity>
}
