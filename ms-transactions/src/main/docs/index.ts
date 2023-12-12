import paths from './paths'
import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'ms-wallet',
    description: "Transaction's microservice",
    version: '0.0.1'
  },
  servers: [{
    url: '/api/',
    description: 'Main server'
  }],
  tags: [{
    name: 'Transactions',
    description: 'Transactions manipulation'
  }],
  paths,
  schemas,
  components
}
