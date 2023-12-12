import * as paths from './paths/'

export default {
  '/transactions/user/{userId}': paths.transactionWithUserIdPath,
  '/transactions': paths.transactionPath,
  '/balance/user/{userId}': paths.balancePath
}
