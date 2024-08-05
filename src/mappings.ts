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

export const componentMap = {
  ComponentCta: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta/CtfCta').then(module => module.CtfCta)
  ),
  ComponentDuplex: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-duplex/CtfDuplex').then(
      module => module.CtfDuplex
    )
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/CtfHeroBanner').then(
      module => module.CtfHeroBanner
    )
  ),
  ComponentInfoBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-info-block/CtfInfoBlock').then(
      module => module.CtfInfoBlock
    )
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/CtfQuote').then(
      module => module.CtfQuote
    )
  ),
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/CtfTextBlock').then(
      module => module.CtfTextBlock
    )
  ),
  TopicPerson: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-person/CtfPerson').then(
      module => module.CtfPerson
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
