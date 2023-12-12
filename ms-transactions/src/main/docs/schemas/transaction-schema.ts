export const transactionWithoutIdSchema = {
  type: 'object',
  properties: {
    userId: {
      type: 'string'
    },
    amount: {
      type: 'integer'
    },
    type: {
      type: 'string'
    }
  }
}

export const transactionSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    userId: {
      type: 'string'
    },
    amount: {
      type: 'integer'
    },
    type: {
      type: 'string'
    }
  }
}

export const balanceSchema = {
  type: 'object',
  properties: {
    amount: {
      type: 'integer'
    }
  }
}

export const transactionsSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'array',
      items: {
        $ref: '#/schemas/transactionSchema'
      }
    }
  }
}
