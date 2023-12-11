import { Router } from 'express'

import { adaptRoute } from '../../adapters'
import { auth } from '../../middlewares/auth'

import {
  makeCreateUserController,
  makeDeleteUserController,
  makeFindAllUserController,
  makeFindByUserController,
  makeUpdateUserController
} from '../../factories/controllers'

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeCreateUserController()))
  router.delete('/users/:id', auth, adaptRoute(makeDeleteUserController()))
  router.get('/users', auth, adaptRoute(makeFindAllUserController()))
  router.get('/users/:id', auth, adaptRoute(makeFindByUserController()))
  router.patch('/users/:id', auth, adaptRoute(makeUpdateUserController()))
}
