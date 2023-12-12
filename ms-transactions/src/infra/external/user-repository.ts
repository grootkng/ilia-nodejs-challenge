import axios from 'axios'

import { UserEntity } from '../../domain/entity/user-entity'
import { IUserUsecase } from '../../domain/usecases/user-usecase'
import env from '../../main/config/env'

export class UserRepository implements IUserUsecase {
  async login(): Promise<string> {
    return fetch(`${env.USER_API_URL}/api/auth`, {
      method: 'post',
      body: JSON.stringify({ apiToken: env.DEFAULT_API_TOKEN })
    })
      .then(response => response as unknown as string)
      .catch(console.error)
  }

  async findById(userId: string): Promise<UserEntity> {
    const token = await this.login()

    return axios({
      url: `${env.USER_API_URL}/api/users/${userId}`,
      headers: { 'x-access-token': token }
    })
      .then(response => response?.data)
  }
}
