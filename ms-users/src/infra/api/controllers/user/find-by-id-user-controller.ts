import { Controller, HttpResponse } from '../../protocols'
import { notFound, ok, serverError } from '../../helpers'

import { IUserUsecase } from '../../../../domain/usecases/user-usecase'

export class FindByIdUserController implements Controller {
  constructor(private readonly entity: IUserUsecase) { }

  async handle(request: FindByIdUserController.Request): Promise<HttpResponse> {
    try {
      const result = await this.entity.findBy(request.id)
      return result ? ok(result) : notFound(`User not found for the requested ID: ${request.id}`)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace FindByIdUserController {
  export type Request = {
    id: string
  }
}
