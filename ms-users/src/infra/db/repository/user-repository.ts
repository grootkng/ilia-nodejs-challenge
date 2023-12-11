import { getManager } from 'typeorm'

import { IUserUsecase } from '../../../domain/usecases/user-usecase'
import { UserEntity } from 'domain/entity/user-entity'
import { DatabaseHelper } from '../sql-helper'
import { Users } from '../models/user'

export class UserRepository implements IUserUsecase {
  async create(payload: UserEntity): Promise<void> {
    try {
      const repository = await DatabaseHelper.get(Users)
      await repository.save({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password
      })
    } catch (error) {
      throw new Error(`[UserRepository] ${error}`)
    }
  }

  async updateBy(id: string, payload: UserEntity): Promise<void> {
    try {
      const reportAsyncRepository = await DatabaseHelper.get(Users)
      await reportAsyncRepository.update({ id: id }, payload)
    } catch (error) {
      throw new Error(`[UserRepository] ${error}`)
    }
  }

  async deleteBy(id: string): Promise<void> {
    try {
      const repository = await DatabaseHelper.get(Users)
      await repository.delete(id)
    } catch (error) {
      throw new Error(`[UserRepository] ${error}`)
    }
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      const entityManager = getManager()
      return await entityManager.query(`
        SELECT
          id,
          email,
          first_name AS firstName,
          last_name AS lastName
        FROM
          users;
      `)
    } catch (error) {
      throw new Error(`[UserRepository] ${error}`)
    }
  }

  async findBy(id: string): Promise<UserEntity> {
    try {
      const repository = await DatabaseHelper.get(Users)
      return await repository.findOne(id)
    } catch (error) {
      throw new Error(`[UserRepository] ${error}`)
    }
  }

  async findByEmail(email: string, password: string): Promise<UserEntity> {
    try {
      const repository = await DatabaseHelper.get(Users)
      return await repository.findOne({ email: email, password: password })
    } catch (error) {
      throw new Error(`[UserRepository] ${error}`)
    }
  }
}
