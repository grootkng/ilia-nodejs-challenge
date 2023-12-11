import { Controller, HttpResponse } from '../../protocols'
import { ok, serverError } from '../../helpers'

import { IUserUsecase } from '../../../../domain/usecases/user-usecase'

export class FindAllUsersController implements Controller {
  constructor(private readonly entity: IUserUsecase) { }

  async handle(): Promise<HttpResponse> {
    try {
      const result = await this.entity.findAll()
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
