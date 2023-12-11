import joi from 'joi'

import { Controller, HttpResponse } from '../../protocols'
import { badRequest, created, serverError } from '../../helpers'

import { IUserUsecase } from '../../../../domain/usecases/user-usecase'

export class CreateUserController implements Controller {
  constructor(private readonly entity: IUserUsecase) { }

  async handle(request: CreateUserController.Request): Promise<HttpResponse> {
    try {
      const { error } = this.validatePayload(request)
      if (error) {
        return badRequest(error)
      }

      await this.entity.create(request)
      return created()
    } catch (error) {
      return serverError(error)
    }
  }

  private validatePayload(payload: CreateUserController.Request): any {
    const schema = joi.object({
      firstName: joi.string().min(3).required(),
      lastName: joi.string().min(3).required(),
      email: joi.string().email().required(),
      password: joi.string().min(8).required()
    })

    return schema.validate(payload)
  }
}

export namespace CreateUserController {
  export type Request = {
    firstName: string
    lastName: string
    email: string
    password: string
  }
}
