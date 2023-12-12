import { Controller } from '../../src/infra/api/protocols'

import { TransactionRepository } from '../../src/infra/db/repository/transaction-repository'
import { MockUserRepository } from '../infra/mock-user-repository'
import { TransactionImplementation } from '../../src/domain/implementation/transaction-implementation'
import { BalanceTransactionController } from '../../src/infra/api/controllers/transaction/balance-transaction-controller'

const makeSut = (): Controller => {
  const transactionRepository = new TransactionRepository()
  const userRepository = new MockUserRepository()
  const entity = new TransactionImplementation(transactionRepository, userRepository)
  return new BalanceTransactionController(entity)
}

describe('find balance', () => {
  it('should return 200', async () => {
    jest
      .spyOn(TransactionRepository.prototype, 'balance')
      .mockImplementation(async () => await Promise.resolve(1))

    const sut = makeSut()
    const httpRequestParams = {
      userId: 'string'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(200)
  })
})
