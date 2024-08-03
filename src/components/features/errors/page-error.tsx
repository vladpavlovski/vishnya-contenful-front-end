'use client'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { PageContainer } from '@src/components/templates/page-container'

interface PropsInterface {
  error?: {
    code: number
    message?: string
  }
}

export const PageError = (props: PropsInterface) => {
  const { t } = useTranslation()

  const error =
    props.error === undefined
      ? {
          code: 400,
          message: t('error.somethingWentWrong')
        }
      : props.error

  return (
    <div className={''} style={{ width: '100%', minHeight: '100%', color: 'black' }}>
      <PageContainer>
        <div className={''} style={{ paddingTop: '16rem' }}>
          <div
            className={''}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '6rem' }}
          >
            <div className={''} style={{ width: '100%', maxWidth: '800px' }}>
              <div className={''} style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ marginBottom: '1rem' }}>{t('error.code', { code: error.code })}</h1>
              </div>
              {error.message && (
                <div className={''} style={{ marginBottom: '6rem' }}>
                  <h4>{error.message}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
