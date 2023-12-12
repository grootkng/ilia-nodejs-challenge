export const transactionWithUserIdPath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Transactions'],
    summary: 'Get transactions',
    parameters: [
      {
        in: 'path',
        name: 'userId',
        description: "User's identifier",
        required: true,
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'type',
        description: "Transaction's type",
        required: false,
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
              $ref: '#/schemas/transactionsSchema'
            }
          }
        }
      }
    }
  }
}

export const balancePath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Transactions'],
    summary: 'Get balance',
    parameters: [
      {
        in: 'path',
        name: 'userId',
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
              $ref: '#/schemas/balanceSchema'
            }
          }
        }
      }
    }
  }
}
