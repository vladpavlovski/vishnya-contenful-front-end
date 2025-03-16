import { GraphqlError } from '@src/components/shared/GraphqlError'

export const PageGraphqlError = (props: { error: any }) => (
  <>
    <div style={{ padding: '0 1rem' }}>
      <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <GraphqlError error={props.error} />
      </div>
    </div>
  </>
)
