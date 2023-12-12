import { MigrationInterface, QueryRunner } from 'typeorm'

export class transactions1635271560354 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE transactions (
      id UUID DEFAULT uuid_generate_v4(),
      user_id VARCHAR(255) NOT NULL,
      amount INTEGER NOT NULL,
      type transaction_type NOT NULL,
      PRIMARY KEY (id));`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions')
  }
}
