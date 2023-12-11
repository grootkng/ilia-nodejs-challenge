import env from './env'

import { DatabaseHelper } from '../../infra/db/sql-helper'

export default async (): Promise<void> => {
  const connectionOptions = {
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DATABASE
  }

  await DatabaseHelper.connect(connectionOptions)
}
