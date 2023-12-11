import { UserEntity } from './user-entity'

export type AuthEntity = {
  user: UserEntity
  access_token: string
}
