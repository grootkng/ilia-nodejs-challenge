import { Controller, HttpResponse } from '../../protocols'
import { ok, serverError, unauthorized } from '../../helpers'

import { IAuthUsecase } from '../../../../domain/usecases/auth-usecase'

export class LoginController implements Controller {
  constructor(private readonly entity: IAuthUsecase) { }

  async handle(request: LoginController.Request): Promise<HttpResponse> {
    try {
      if (!request.email || !request.password) {
        unauthorized()
      }

      if (request.apiToken) {
        const result = await this.entity.authApi(request.apiToken)
        return !result ? unauthorized() : ok(result)
      }

      const result = await this.entity.auth(request.email, request.password)
      return !result ? unauthorized() : ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoginController {
  export type Request = {
    email?: string
    password?: string
    apiToken?: string
  }
}
