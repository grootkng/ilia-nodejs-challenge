import { Controller } from '../../src/infra/api/protocols'

import { UserRepository } from '../../src/infra/db/repository/user-repository'
import { UserImplementation } from '../../src/domain/implementation/user-implementation'
import { DeleteByIdUserController } from '../../src/infra/api/controllers/user/delete-by-id-user-controller'

const makeSut = (): Controller => {
  const repository = new UserRepository()
  const entity = new UserImplementation(repository)
  return new DeleteByIdUserController(entity)
}

describe('delete by id user', () => {
  it('should return 200', async () => {
    jest
      .spyOn(UserRepository.prototype, 'deleteBy')
      .mockImplementation(async () => await Promise.resolve())

    const sut = makeSut()
    const httpRequestParams = {
      id: 'string'
    }

    const httpResponse = await sut.handle(httpRequestParams)
    expect(httpResponse.statusCode).toBe(200)
  })
})
