import { HttpResponse } from '../protocols/http'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: {
    data: data
  }
})

export const created = (): HttpResponse => ({
  statusCode: 201,
  body: null
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const badRequest = (error: any): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: null
})

export const notFound = (error: any): HttpResponse => ({
  statusCode: 404,
  body: error
})

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: error
})
