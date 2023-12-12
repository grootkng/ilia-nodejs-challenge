/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: "user_id" })
  userId: string

  @Column()
  type: string

  @Column()
  amount: number
}
