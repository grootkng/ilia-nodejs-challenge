import paths from './paths'
import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'ms-users',
    description: "User's microservice",
    version: '0.0.1'
  },
  servers: [{
    url: '/api/',
    description: 'Main server'
  }],
  tags: [{
    name: 'User',
    description: 'User manipulation'
  }],
  paths,
  schemas,
  components
}
