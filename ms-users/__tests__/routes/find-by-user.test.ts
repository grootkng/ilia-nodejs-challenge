import { Controller } from '../../src/infra/api/protocols'

import { UserRepository } from '../../src/infra/db/repository/user-repository'
import { UserImplementation } from '../../src/domain/implementation/user-implementation'
import { FindByIdUserController } from '../../src/infra/api/controllers/user/find-by-id-user-controller'
import { UserEntity } from 'domain/entity/user-entity'

const makeSut = (): Controller => {
  const repository = new UserRepository()
  const entity = new UserImplementation(repository)
  return new FindByIdUserController(entity)
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
      .spyOn(UserRepository.prototype, 'findBy')
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
      .spyOn(UserRepository.prototype, 'findBy')
      .mockImplementation(async () => await Promise.resolve(null))

    const sut = makeSut()
    const httpRequestParams = {
      id: 'string'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(404)
  })
})
