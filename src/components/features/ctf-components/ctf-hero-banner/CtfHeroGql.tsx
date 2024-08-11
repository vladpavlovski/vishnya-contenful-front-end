import React from 'react'

import {
  CtfHeroBannerQueryVariables,
  useCtfHeroBannerQuery
} from './__generated/ctf-hero-banner.generated'
import { CtfHeroBanner } from './CtfHeroBanner'

export const CtfHeroGql = async (props: CtfHeroBannerQueryVariables) => {
  const data = await useCtfHeroBannerQuery.fetcher(props)()
  return <CtfHeroBanner {...data} />
}
