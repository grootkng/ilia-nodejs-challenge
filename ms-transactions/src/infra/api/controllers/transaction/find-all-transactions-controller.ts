import { Controller, HttpResponse } from '../../protocols'
import { badRequest, ok, serverError } from '../../helpers'

import { ITransactionUsecase } from '../../../../domain/usecases/transaction-usecase'
import { UserNotExistException } from '../../../../shared/exceptions/user-not-exist'

export class FindAllTransactionController implements Controller {
  constructor(private readonly entity: ITransactionUsecase) { }

  async handle(request: FindAllTransactionController.Request): Promise<HttpResponse> {
    try {
      const result = await this.entity.findAll(request.userId, request.type)
      return ok(result)
    } catch (error) {
      if (error instanceof UserNotExistException) {
        return badRequest(error)
      }

      return serverError(error)
    }
  }
}

export namespace FindAllTransactionController {
  export type Request = {
    userId: string
    type?: string
  }
}
