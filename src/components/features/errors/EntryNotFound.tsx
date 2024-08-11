// import { useTranslation } from 'next-i18next'

import { ErrorBox } from '@src/components/shared/ErrorBox'

export const EntryNotFound = (props: { className?: string }) => {
  // const { t } = useTranslation()
  // {t('error.componentNotFound')}
  return <ErrorBox {...props}>Component not found</ErrorBox>
}
