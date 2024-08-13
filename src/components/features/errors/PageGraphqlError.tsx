import { GraphqlError } from '@src/components/shared/GraphqlError'
import { PageContainer } from '@src/components/templates/page-container/PageContainer'

export const PageGraphqlError = (props: { error: any }) => (
  <PageContainer>
    <div style={{ padding: '0 1rem' }}>
      <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <GraphqlError error={props.error} />
      </div>
    </div>
  </PageContainer>
)
