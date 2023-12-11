export const userPaths = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['User'],
    summary: 'Get users',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/usersSchema'
            }
          }
        }
      }
    }
  },
  post: {
    tags: ['User'],
    summary: 'Create user',
    requestBody: {
      description: 'Payload',
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/userSchema'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Created'
      }
    }
  }
}
