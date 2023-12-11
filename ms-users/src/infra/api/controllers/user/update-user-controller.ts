import joi from 'joi'

import { Controller, HttpResponse } from '../../protocols'
import { badRequest, ok, serverError } from '../../helpers'
import { IUserUsecase } from '../../../../domain/usecases/user-usecase'

export class UpdateByIdUserController implements Controller {
  constructor(private readonly implementation: IUserUsecase) { }

  async handle(request: UpdateByIdUserController.Request): Promise<HttpResponse> {
    try {
      const { error } = this.validatePayload(request)
      if (error) {
        return badRequest(error)
      }

      const result = await this.implementation.updateBy(request.id, this.payload(request))
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }

  private payload(request: UpdateByIdUserController.Request): UpdateByIdUserController.Payload {
    const payload = { ...request }
    delete payload.id

    return payload
  }

  private validatePayload(payload: UpdateByIdUserController.Request): any {
    const schema = joi.object({
      id: joi.string().min(3).required(),
      firstName: joi.string().min(3).optional(),
      lastName: joi.string().min(3).optional(),
      email: joi.string().email().optional(),
      password: joi.string().min(8).optional()
    })

    return schema.validate(payload)
  }
}

export namespace UpdateByIdUserController {
  export type Request = {
    id: string
    firstName?: string
    lastName?: string
    email?: string
    password?: string
  }

  export type Payload = {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
  }
}
