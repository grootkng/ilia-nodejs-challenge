import { UserEntity } from 'domain/entity/user-entity'
import { IUserUsecase } from 'domain/usecases/user-usecase'

export class UserImplementation implements IUserUsecase {
  constructor(private readonly repository: IUserUsecase) { }

  public async create(payload: UserEntity): Promise<void> {
    try {
      payload.email = payload.email.toLowerCase()
      await this.repository.create(payload)
    } catch (error) {
      console.error({ error })
      throw error
    }
  }

  public async findAll(): Promise<UserEntity[]> {
    try {
      return await this.repository.findAll()
    } catch (error) {
      console.error({ error })
      throw error
    }
  }

  public async findBy(id: string): Promise<UserEntity> {
    try {
      return await this.repository.findBy(id)
    } catch (error) {
      console.error({ error })
      throw error
    }
  }

  public async deleteBy(id: string): Promise<void> {
    try {
      await this.repository.deleteBy(id)
    } catch (error) {
      console.error({ error })
      throw error
    }
  }

  public async updateBy(id: string, payload: UserEntity): Promise<void> {
    try {
      if (payload?.email) {
        payload.email = payload.email.toLowerCase()
      }

      await this.repository.updateBy(id, payload)
    } catch (error) {
      console.error({ error })
      throw error
    }
  }
}
