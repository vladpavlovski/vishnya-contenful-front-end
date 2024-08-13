import { PageContainer } from '@src/components/templates/page-container/PageContainer'

interface PropsInterface {
  error?: {
    code: number
    message?: string
  }
}

export const PageError = (props: PropsInterface) => {
  const error =
    props.error === undefined
      ? {
          code: 400,
          message: 'Something went wrong' // t('error.somethingWentWrong')
        }
      : props.error

  return (
    <div style={{ width: '100%', minHeight: '100%', color: 'black' }}>
      <PageContainer>
        <div style={{ paddingTop: '16rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6rem' }}>
            <div style={{ width: '100%', maxWidth: '800px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ marginBottom: '1rem' }}>Error code</h1>
              </div>
              {error.message && (
                <div style={{ marginBottom: '6rem' }}>
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
