import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import setupRoutes from './routes'
import setupSwagger from './swagger'

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

setupRoutes(app)
setupSwagger(app)

export default app
