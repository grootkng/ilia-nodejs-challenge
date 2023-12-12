import { Controller } from '../../src/infra/api/protocols'

import { TransactionRepository } from '../infra/db/repository/transaction-repository'
import { TransactionImplementation } from '../domain/implementation/transaction-implementation'
import { FindAllUsersController } from '../infra/api/controllers/transaction/find-all-transactions-controller'
import { UserEntity } from 'domain/entity/user-entity'

const makeSut = (): Controller => {
  const repository = new TransactionRepository()
  const entity = new TransactionImplementation(repository)
  return new FindAllUsersController(entity)
}

const makeDatabaseResult = (): UserEntity[] => {
  return [{
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string'
  }]
}

describe('find all users', () => {
  it('should return 200', async () => {
    jest
      .spyOn(TransactionRepository.prototype, 'findAll')
      .mockImplementation(async () => await Promise.resolve(makeDatabaseResult()))

    const sut = makeSut()
    const httpRequestParams = {}

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(200)
  })
})
