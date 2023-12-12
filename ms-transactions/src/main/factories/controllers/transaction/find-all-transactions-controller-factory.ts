import { Controller } from '../../../../infra/api'

import { TransactionRepository } from '../../../../infra/db/repository/transaction-repository'
import { UserRepository } from '../../../../infra/external/user-repository'
import { TransactionImplementation } from '../../../../domain/implementation/transaction-implementation'
import { FindAllTransactionController } from '../../../../infra/api/controllers'

export const makeFindAllTransactionController = (): Controller => {
  const transactionRepository = new TransactionRepository()
  const userRepository = new UserRepository()
  const entity = new TransactionImplementation(transactionRepository, userRepository)
  return new FindAllTransactionController(entity)
}
