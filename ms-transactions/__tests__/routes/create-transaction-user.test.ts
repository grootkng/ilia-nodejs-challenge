import { Controller } from '../../src/infra/api/protocols'

import { TransactionRepository } from '../infra/db/repository/transaction-repository'
import { UserRepository } from '../infra/external/user-repository'
import { TransactionImplementation } from '../domain/implementation/transaction-implementation'
import { CreateTransactionController } from '../infra/api/controllers/transaction/create-transaction-controller'

const makeSut = (): Controller => {
  const transactionRepository = new TransactionRepository()
  const userRepository = new UserRepository()
  const entity = new TransactionImplementation(transactionRepository, userRepository)
  return new CreateTransactionController(entity)
}

describe('create transaction', () => {
  it('should return 201', async () => {
    jest
      .spyOn(TransactionRepository.prototype, 'create')
      .mockImplementation(async () => await Promise.resolve())

    jest
      .spyOn(UserRepository.prototype, 'findById')
      .mockImplementation(async () => await Promise.resolve({ foo: 'bar' }))

    const sut = makeSut()
    const httpRequestParams = {
      firstName: 'string',
      lastName: 'string',
      email: 'string@email.com',
      password: 'string78'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(201)
  })

  it('should return 500', async () => {
    jest
      .spyOn(TransactionRepository.prototype, 'create')
      .mockImplementation(async () => await Promise.reject(new Error('Something went wrong on user creation')))

    const sut = makeSut()
    const httpRequestParams = {
      firstName: 'string',
      lastName: 'string',
      email: 'string@email.com',
      password: 'string78'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(500)
  })
})
