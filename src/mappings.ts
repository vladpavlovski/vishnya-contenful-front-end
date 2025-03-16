import dynamic from 'next/dynamic'

const pageTopicMap = {
  TopicProduct: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-product/CtfProductGql').then(
      module => module.CtfProductGql
    )
  ),
  TopicBusinessInfo: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-business-info/CtfBusinessInfoGql').then(
      module => module.CtfBusinessInfoGql
    )
  ),
  ComponentProductTable: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-product-table/CtfProductTableGql').then(
      module => module.CtfProductTableGql
    )
  )
}

export const componentGqlMap = {
  ...pageTopicMap,
  ComponentCta: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta/CtfCtaGql').then(
      module => module.CtfCtaGql
    )
  ),
  ComponentDuplex: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-duplex/CtfDuplexGql').then(
      module => module.CtfDuplexGql
    )
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/CtfHeroGql').then(
      module => module.CtfHeroGql
    )
  ),
  ComponentInfoBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-info-block/CtfInfoBlockGql').then(
      module => module.CtfInfoBlockGql
    )
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/CtfQuoteGql').then(
      module => module.CtfQuoteGql
    )
  ),
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/CtfTextBlockGql').then(
      module => module.CtfTextBlockGql
    )
  ),
  TopicPerson: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-person/CtfPersonGql').then(
      module => module.CtfPersonGql
    )
  ),
  ComponentFooter: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-footer/CtfFooterGql').then(
      module => module.CtfFooterGql
    )
  )
}
