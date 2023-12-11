import * as paths from './paths/'

export default {
  '/users': paths.userPaths,
  '/users/{id}': paths.userByIdPaths,

  '/auth': paths.authPath
}
