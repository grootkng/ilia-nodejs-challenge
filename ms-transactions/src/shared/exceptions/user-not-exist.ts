export class UserNotExistException extends Error {
  constructor(userId: string) {
    super(`User doesn't exist: ${userId}`)
    Object.setPrototypeOf(this, UserNotExistException.prototype)
  }
}
