import { Controller } from '../../src/infra/api/protocols'

import { UserRepository } from '../../src/infra/db/repository/user-repository'
import { UserImplementation } from '../../src/domain/implementation/user-implementation'
import { CreateUserController } from '../../src/infra/api/controllers/user/create-user-controller'

const makeSut = (): Controller => {
  const repository = new UserRepository()
  const entity = new UserImplementation(repository)
  return new CreateUserController(entity)
}

describe('create user', () => {
  it('should return 201', async () => {
    jest
      .spyOn(UserRepository.prototype, 'create')
      .mockImplementation(async () => await Promise.resolve())

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
      .spyOn(UserRepository.prototype, 'create')
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
