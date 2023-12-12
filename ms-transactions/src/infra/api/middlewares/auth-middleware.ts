import { Middleware, HttpResponse } from '../protocols'
import { unauthorized, serverError, emptyOk } from '../helpers'

import { IAuthUsecase } from '../../../domain/usecases/auth-usecase'

export class AuthMiddleware implements Middleware {
  constructor(private readonly auth: IAuthUsecase) { }

  async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      if (!request.accessToken || !this.auth.decodeToken(request.accessToken)) {
        return unauthorized()
      }

      return emptyOk()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}
