import joi from 'joi'

import { Controller, HttpResponse } from '../../protocols'
import { badRequest, created, serverError } from '../../helpers'

import { ITransactionUsecase } from '../../../../domain/usecases/transaction-usecase'
import { UserNotExistException } from '../../../../shared/exceptions/user-not-exist'

export class CreateTransactionController implements Controller {
  constructor(private readonly entity: ITransactionUsecase) { }

  async handle(request: CreateTransactionController.Request): Promise<HttpResponse> {
    try {
      const { error } = this.validatePayload(request)
      console.info({ error })

      if (error) {
        return badRequest(error)
      }

      await this.entity.create(request)
      return created()
    } catch (error) {
      if (error instanceof UserNotExistException) {
        return badRequest(error)
      }

      return serverError(error)
    }
  }

  private validatePayload(payload: CreateTransactionController.Request): any {
    const schema = joi.object({
      userId: joi.string().min(3).required(),
      type: joi.string().valid('debit', 'credit').required(),
      amount: joi.number().integer().required()
    })

    return schema.validate(payload)
  }
}

export namespace CreateTransactionController {
  export type Request = {
    userId: string
    type: string
    amount: number
  }
}
