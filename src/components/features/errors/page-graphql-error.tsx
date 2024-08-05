'use client'
import { GraphqlError } from '@src/components/shared/graphql-error'
import { PageContainer } from '@src/components/templates/page-container/PageContainer'

export const PageGraphqlError = (props: { error: any }) => (
  <PageContainer>
    <div className={''} style={{ padding: '0 1rem' }}>
      <div className={''} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <GraphqlError error={props.error} />
      </div>
    </div>
  </PageContainer>
)
