export const transactionPath = {
  post: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Transactions'],
    summary: 'Create transaction',
    requestBody: {
      description: 'Payload',
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/transactionWithoutIdSchema'
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
