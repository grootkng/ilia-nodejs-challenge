import { Controller } from '../../src/infra/api/protocols'

import { UserRepository } from '../../src/infra/db/repository/user-repository'
import { UserImplementation } from '../../src/domain/implementation/user-implementation'
import { UpdateByIdUserController } from '../../src/infra/api/controllers/user/update-user-controller'

const makeSut = (): Controller => {
  const repository = new UserRepository()
  const entity = new UserImplementation(repository)
  return new UpdateByIdUserController(entity)
}

describe('update user by id', () => {
  it('should return 200', async () => {
    jest
      .spyOn(UserRepository.prototype, 'updateBy')
      .mockImplementation(async () => await Promise.resolve())

    const sut = makeSut()
    const httpRequestParams = {
      id: 'string',
      firstName: 'string',
      lastName: 'string',
      email: 'string@email.com',
      password: 'string78'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(200)
  })
})
