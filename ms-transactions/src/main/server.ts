import app from './config/app'
import env from './config/env'

import { DatabaseHelper } from '../infra/db/sql-helper'

DatabaseHelper
  .connect({
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DATABASE
  })
  .then(_ => {
    app
      .listen(env.PORT, () => console.log(`Server running at http://localhost:${env.PORT}`))
  })
  .catch(console.error)
