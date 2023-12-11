export const authPath = {
  post: {
    tags: ['Auth'],
    summary: 'Login',
    requestBody: {
      description: 'Payload',
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginSchema'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success'
      },
      401: {
        description: 'Unauthorized'
      }
    }
  }
}
