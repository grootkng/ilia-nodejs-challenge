import { Router } from 'express'

import { adaptRoute } from '../../adapters'
import { auth } from '../../middlewares/auth'

import {
  makeCreateTransactionController,
  makeFindAllTransactionController,
  makeBalanceTransactionController
} from '../../factories/controllers'

export default (router: Router): void => {
  router.post('/transactions', auth, adaptRoute(makeCreateTransactionController()))
  router.get('/transactions/user/:userId', auth, adaptRoute(makeFindAllTransactionController()))
  router.get('/balance/user/:userId', auth, adaptRoute(makeBalanceTransactionController()))
}
