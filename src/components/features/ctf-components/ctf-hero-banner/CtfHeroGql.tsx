import React from 'react'

import {
  CtfHeroBannerQueryVariables,
  getCtfHeroBannerData
} from './__generated/ctf-hero-banner.generated'
import { CtfHeroBanner } from './CtfHeroBanner'

export const CtfHeroGql = async (props: CtfHeroBannerQueryVariables) => {
  const data = await getCtfHeroBannerData(props)
  return <CtfHeroBanner {...data} />
}
