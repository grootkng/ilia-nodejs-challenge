import { getManager } from 'typeorm'

import { ITransactionUsecase } from '../../../domain/usecases/transaction-usecase'
import { TransactionEntity } from 'domain/entity/transaction-entity'
import { DatabaseHelper } from '../sql-helper'
import { Transactions } from '../models/transaction'

export class TransactionRepository implements ITransactionUsecase {
  async create(payload: TransactionEntity): Promise<void> {
    try {
      const repository = await DatabaseHelper.get(Transactions)
      await repository.save({
        userId: payload.userId,
        type: payload.type,
        amount: payload.amount
      })
    } catch (error) {
      throw new Error(`[TransactionRepository] ${error}`)
    }
  }

  async findAll(userId: string, type?: string): Promise<TransactionEntity[]> {
    try {
      const entityManager = getManager()
      let query = `
        SELECT
          id,
          user_id AS userId,
          type,
          amount
        FROM
          transactions
        WHERE
          user_id = '${userId}'
      `

      if (type && type !== '') {
        query += ` AND type = '${type}'`
      }

      return await entityManager.query(query)
    } catch (error) {
      throw new Error(`[TransactionRepository] ${error}`)
    }
  }

  async balance(userId: string): Promise<TransactionEntity> {
    try {
      const entityManager = getManager()
      const result = await entityManager.query(`
        SELECT
          SUM(amount) AS amount
        WHERE
          user_id = '${userId}';
      `)

      return result?.at(0)
    } catch (error) {
      throw new Error(`[TransactionRepository] ${error}`)
    }
  }
}
