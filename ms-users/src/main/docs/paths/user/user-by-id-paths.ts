export const userByIdPaths = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['User'],
    summary: 'Get user',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: "User's identifier",
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/userWithoutPasswordSchema'
            }
          }
        }
      },
      404: {
        description: 'Resource not found'
      }
    }
  },
  patch: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['User'],
    summary: 'Update user data',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: "User's identifier",
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
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
      204: {
        description: 'Success'
      }
    }
  },
  delete: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['User'],
    summary: 'Delete a user.',
    parameters: [
      {
        in: 'path',
        name: 'id',
        description: "User's identifier",
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
    responses: {
      204: {
        description: 'Success'
      }
    }
  }
}
