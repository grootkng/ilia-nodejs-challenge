import { Controller } from '../../src/infra/api/protocols'

import { TransactionRepository } from '../../src/infra/db/repository/transaction-repository'
import { MockUserRepository } from '../infra/mock-user-repository'
import { TransactionImplementation } from '../../src/domain/implementation/transaction-implementation'
import { FindAllTransactionController } from '../../src/infra/api/controllers/transaction/find-all-transactions-controller'
import { TransactionEntity } from '../../src/domain/entity/transaction-entity'

const makeSut = (): Controller => {
  const transactionRepository = new TransactionRepository()
  const userRepository = new MockUserRepository()
  const entity = new TransactionImplementation(transactionRepository, userRepository)
  return new FindAllTransactionController(entity)
}

const makeDatabaseResult = (): TransactionEntity[] => {
  return [{
    userId: 'string',
    amount: 1,
    type: 'debit'
  }]
}

describe('find transactions', () => {
  it('should return 200', async () => {
    jest
      .spyOn(TransactionRepository.prototype, 'findAll')
      .mockImplementation(async () => await Promise.resolve(makeDatabaseResult()))

    const sut = makeSut()
    const httpRequestParams = {
      userId: 'string'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(200)
  })
})
