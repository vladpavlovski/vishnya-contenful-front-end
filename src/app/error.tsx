'use client'
import { IncomingMessage } from 'http'

import { NextPage } from 'next'
import NextErrorComponent from 'next/error'
import React from 'react'

import { PageError } from '@src/components/features/errors/page-error'
import { tryget } from '@src/utils'

export interface NextPageErrorRequest extends IncomingMessage {
  query: {
    [key: string]: string | string[]
  }
  cookies: {
    [key: string]: string
  }
  body: any
}

interface ErrorPagePropsInterface {
  statusCode: number
  hasGetInitialPropsRun?: boolean
  err?: Error
  code?: number
  message?: string
  req?: Pick<NextPageErrorRequest, 'url' | 'method' | 'query' | 'cookies' | 'body' | 'headers'>
}

const getStatusAndMessageFromError = (
  err: Error,
  statusCode = 500
): { code: number; message: string } => {
  let error = {
    code: statusCode,
    message: ''
  }

  const errorMessage = tryget(() => (err as any).networkError.result.errors[0].message, '')

  const errorStatus = tryget(() => (err as any).networkError.statusCode, statusCode)

  const isEnvironmentNotFoundError = tryget(
    () => errorMessage.includes('The access token you provided is invalid'),
    false
  )

  const isMissingContentTypeError = tryget(() => errorMessage.includes('Unknown type "'), false)

  if (isEnvironmentNotFoundError) {
    error = {
      code: errorStatus,
      message:
        'Either environment was not found, or your access token is incorrect. If your default environment works, then it is possible that you misspelled your environment, or you did not enable it in the API Key settings.'
    }
  } else if (isMissingContentTypeError) {
    const missingContentType = errorMessage.split('"')[1]

    error = {
      code: errorStatus,
      message: `Could not find "${missingContentType}" Content Type. Make sure you have installed the necessary apps and that you did not rename or delete any of the core content types.`
    }
  } else if (errorMessage !== '') {
    error = {
      code: errorStatus,
      message: errorMessage
    }
  } else {
    error = {
      code: errorStatus,
      message: err.message
    }
  }

  return error
}

const ErrorPage: NextPage<ErrorPagePropsInterface> = ({ statusCode, err, code, message }) => {
  if (code !== undefined && message !== undefined) {
    return <PageError error={{ code, message }} />
  }

  if (err !== undefined) {
    return <PageError error={getStatusAndMessageFromError(err, statusCode)} />
  }

  return <NextErrorComponent statusCode={statusCode} />
}

export default ErrorPage
