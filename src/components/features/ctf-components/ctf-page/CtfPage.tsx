import { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated'
import { ComponentResolver } from '@src/components/shared/ComponentResolver'

const CtfPage = (props: CtfPageFieldsFragment) => {
  const topSection =
    props.topSectionCollection && props.topSectionCollection.items.filter(it => !!it)
  const content = props.pageContent
  const extraSection =
    props.extraSectionCollection && props.extraSectionCollection.items.filter(it => !!it)

  return (
    <>
      {topSection &&
        topSection.map(entry => <ComponentResolver componentProps={entry!} key={entry!.sys.id} />)}

      {content && <ComponentResolver componentProps={content} />}

      {extraSection &&
        extraSection.map(entry => (
          <ComponentResolver componentProps={entry!} key={entry!.sys.id} />
        ))}
    </>
  )
}

export default CtfPage
