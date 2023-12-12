import * as dotenv from 'dotenv'

dotenv.config()

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3002,

  PRIVATE_KEY: process.env.PRIVATE_KEY || 'ILIACHALLENGE ',
  PRIVATE_KEY_INTERNAL: process.env.PRIVATE_KEY_INTERNAL || 'ILIACHALLENGE_INTERNAL',
  DEFAULT_API_TOKEN: process.env.DEFAULT_API_TOKEN || 'a7b4bc4-9895-11ee-b9d1-0242ac120002',

  DB_HOST: process.env.TYPEORM_HOST || 'localhost',
  DB_PORT: process.env.TYPEORM_PORT || 5432,
  DB_USERNAME: process.env.TYPEORM_USERNAME || 'root',
  DB_PASSWORD: process.env.TYPEORM_PASSWORD || 'pass',
  DATABASE: process.env.TYPEORM_DATABASE || 'userdb'
}
