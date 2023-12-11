import { Controller, HttpResponse } from '../../protocols'
import { ok, serverError } from '../../helpers'

import { IUserUsecase } from '../../../../domain/usecases/user-usecase'

export class DeleteByIdUserController implements Controller {
  constructor(private readonly entity: IUserUsecase) { }

  async handle(request: DeleteByIdUserController.Request): Promise<HttpResponse> {
    try {
      const result = await this.entity.deleteBy(request.id)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace DeleteByIdUserController {
  export type Request = {
    id: string
  }
}
