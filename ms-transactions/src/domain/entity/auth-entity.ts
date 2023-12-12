import { TransactionEntity } from './transaction-entity'

export type AuthEntity = {
  user: TransactionEntity
  access_token: string
}
