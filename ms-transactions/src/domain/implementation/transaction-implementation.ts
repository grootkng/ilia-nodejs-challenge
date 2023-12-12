import { TransactionEntity } from 'domain/entity/transaction-entity'
import { ITransactionUsecase } from 'domain/usecases/transaction-usecase'
import { IUserUsecase } from 'domain/usecases/user-usecase'
import { UserNotExistException } from '../../shared/exceptions/user-not-exist'

export class TransactionImplementation implements ITransactionUsecase {
  constructor(
    private readonly transactionRepository: ITransactionUsecase,
    private readonly userRepository: IUserUsecase
  ) { }

  public async create(payload: TransactionEntity): Promise<void> {
    try {
      const user = await this.userRepository.findById(payload.userId)
      if (!user) {
        throw new UserNotExistException(payload.userId)
      }

      await this.transactionRepository.create(payload)
    } catch (error) {
      console.error({ error })
      throw error
    }
  }

  public async findAll(userId: string, type?: string): Promise<TransactionEntity[]> {
    try {
      const user = await this.userRepository.findById(userId)
      if (!user) {
        throw new UserNotExistException(userId)
      }

      return await this.transactionRepository.findAll(userId, type)
    } catch (error) {
      console.error({ error })
      throw error
    }
  }

  public async balance(userId: string): Promise<number> {
    try {
      const user = await this.userRepository.findById(userId)
      if (!user) {
        throw new UserNotExistException(userId)
      }

      const amount = await this.transactionRepository.balance(userId)
      return Number(amount)
    } catch (error) {
      console.error({ error })
      throw error
    }
  }
}
