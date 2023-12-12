export type TransactionEntity = {
  id?: string
  userId?: string
  type?: string | Type
  amount?: number
}

export enum Type {
  DEBIT = 'debit',
  CREDIT = 'credit'
}
