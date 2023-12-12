import { Controller } from '../../src/infra/api/protocols'

import { TransactionRepository } from '../../src/infra/db/repository/transaction-repository'
import { MockUserRepository } from '../infra/mock-user-repository'
import { TransactionImplementation } from '../../src/domain/implementation/transaction-implementation'
import { CreateTransactionController } from '../../src/infra/api/controllers/transaction/create-transaction-controller'

const makeSut = (): Controller => {
  const transactionRepository = new TransactionRepository()
  const userRepository = new MockUserRepository()
  const entity = new TransactionImplementation(transactionRepository, userRepository)
  return new CreateTransactionController(entity)
}

describe('create transaction', () => {
  it('should return 201', async () => {
    jest
      .spyOn(TransactionRepository.prototype, 'create')
      .mockImplementation(async () => await Promise.resolve())

    const sut = makeSut()
    const httpRequestParams = {
      userId: 'string',
      amount: 1,
      type: 'debit'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(201)
  })
})
