import path from 'path'
import 'reflect-metadata'

import { createConnection, Connection, getRepository } from 'typeorm'

export const DatabaseHelper = {
  async connect (connectionInfo: ConnectionInfos): Promise<Connection> {
    return await createConnection({
      type: 'postgres',
      host: connectionInfo.host,
      port: connectionInfo.port,
      username: connectionInfo.username,
      password: connectionInfo.password,
      database: connectionInfo.database,
      migrationsTableName: 'migration_schema',
      entities: [path.join(__dirname, 'models/*.ts')]
    })
  },

  async get (entity) {
    return await getRepository(entity)
  }
}

export type ConnectionInfos = {
  host: string
  port: number
  username: string
  password: string
  database: string
}
