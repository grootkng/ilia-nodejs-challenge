import { AuthEntity } from 'domain/entity/auth-entity'

export interface IAuthUsecase {
  auth?: (email: string, password: string) => Promise<AuthEntity>
  token?: (email: string, password: string) => Promise<string>
  decodeToken?: (token: string) => Promise<boolean>
}
