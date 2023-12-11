import { Controller } from '../../src/infra/api/protocols'

import { UserRepository } from '../../src/infra/db/repository/user-repository'
import { UserImplementation } from '../../src/domain/implementation/user-implementation'
import { FindAllUsersController } from '../../src/infra/api/controllers/user/find-all-users-controller'
import { UserEntity } from 'domain/entity/user-entity'

const makeSut = (): Controller => {
  const repository = new UserRepository()
  const entity = new UserImplementation(repository)
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
      .spyOn(UserRepository.prototype, 'findAll')
      .mockImplementation(async () => await Promise.resolve(makeDatabaseResult()))

    const sut = makeSut()
    const httpRequestParams = {}

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(200)
  })
})
