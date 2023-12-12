import { TransactionEntity } from 'domain/entity/transaction-entity'

export interface ITransactionUsecase {
  create: (payload: TransactionEntity) => Promise<void>
  findAll: (userid: string, type?: string) => Promise<TransactionEntity[]>
  balance: (userId: string) => Promise<number>
}
