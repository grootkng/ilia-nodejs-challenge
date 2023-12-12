import { MigrationInterface, QueryRunner } from 'typeorm'

export class transactions_type1635271560354 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TYPE transaction_type AS ENUM ('credit', 'debit');")
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TYPE transaction_type;')
  }
}
