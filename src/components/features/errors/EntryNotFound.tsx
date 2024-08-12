import { ErrorBox } from '@src/components/shared/ErrorBox'

export const EntryNotFound = (props: { className?: string }) => {
  return <ErrorBox {...props}>Component not found</ErrorBox>
}
