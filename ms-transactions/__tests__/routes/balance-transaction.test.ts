import { Controller } from '../../src/infra/api/protocols'

import { TransactionRepository } from '../infra/db/repository/transaction-repository'
import { TransactionImplementation } from '../domain/implementation/transaction-implementation'
import { BalanceTransactionController } from '../infra/api/controllers/transaction/balance-transaction-controller'
import { UserEntity } from 'domain/entity/user-entity'

const makeSut = (): Controller => {
  const repository = new TransactionRepository()
  const entity = new TransactionImplementation(repository)
  return new BalanceTransactionController(entity)
}

const makeDatabaseResult = (): UserEntity => {
  return {
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string'
  }
}

describe('find by id user', () => {
  it('should return 200', async () => {
    jest
      .spyOn(TransactionRepository.prototype, 'findBy')
      .mockImplementation(async () => await Promise.resolve(makeDatabaseResult()))

    const sut = makeSut()
    const httpRequestParams = {
      id: 'string'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(200)
  })

  it('should return 404 when user not found', async () => {
    jest
      .spyOn(TransactionRepository.prototype, 'findBy')
      .mockImplementation(async () => await Promise.resolve(null))

    const sut = makeSut()
    const httpRequestParams = {
      id: 'string'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(404)
  })
})
