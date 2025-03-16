'use client'
import Image, { ImageLoader } from 'next/legacy/image'
import queryString from 'query-string'
import { useMemo, useRef } from 'react'

import { CtfProductTableQuery } from './__generated/ctf-product-table.generated'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { FormatCurrency } from '@src/components/features/format-currency/FormatCurrency'
import { SectionHeadlines } from '@src/components/features/section-headlines/SectionHeadlines'

const contentfulLoader: ImageLoader = ({ src, width, quality }) => {
  const params: Record<string, string | number> = {}

  if (width) {
    params.w = width
  }

  if (quality) {
    params.q = quality
  }

  return queryString.stringifyUrl({ url: src, query: params })
}

export const CtfProductTable = ({ componentProductTable }: CtfProductTableQuery) => {
  const {
    headline,
    subline,
    productsCollection,
    sys: { id }
  } = componentProductTable!

  // Rendering product features
  const featureNames: string[] | null = useMemo(() => {
    if (!productsCollection || productsCollection?.items.length === 0) {
      return null
    }

    const names: string[] = []

    productsCollection?.items.forEach(product => {
      if (!product || (product.featuresCollection?.items.length || 0) === 0) {
        return
      }

      product.featuresCollection!.items.forEach(feature => {
        if (!feature?.name) {
          return
        }

        if (names.includes(feature.name)) {
          return
        }

        names.push(feature.name)
      })
    })

    return names
  }, [productsCollection])

  const featuresGrid: Record<
    string,
    Record<string, { attributes: Record<string, string>; value: any }>
  > | null = useMemo(() => {
    if (!featureNames || !productsCollection) {
      return null
    }

    const grid = {}

    featureNames.forEach(featureName => {
      grid[featureName] = {}

      productsCollection?.items.forEach(product => {
        if (!product || (product.featuresCollection?.items.length || 0) === 0) {
          return
        }

        const feature = product.featuresCollection!.items.find(
          featureX => featureX?.name === featureName
        )

        if (!feature) {
          return
        }

        const fieldId: keyof typeof feature = feature.shortDescription
          ? 'shortDescription'
          : 'longDescription'

        grid[featureName][product.sys.id] = {
          attributes: {},
          value: feature[fieldId]
        }
      })
    })

    return grid
  }, [featureNames, productsCollection])

  // Keeping the grid items the same size
  const gridElement = useRef<HTMLDivElement>(null)
  const gridColumnElements = useRef<(HTMLDivElement | null)[]>([])

  return (
    <div ref={gridElement}>
      <div>
        <div>
          <SectionHeadlines headline={headline} subline={subline} />
          {productsCollection && productsCollection.items.length > 0 && (
            <div>
              {productsCollection.items.map(
                (product, j) =>
                  product && (
                    <div
                      key={product.sys.id}
                      ref={el => {
                        gridColumnElements.current[j] = el
                      }}
                    >
                      <div>
                        <div data-equal-size="0">
                          {product.featuredImage && (
                            <Image
                              src={product.featuredImage.url as string}
                              alt={product.featuredImage.description || ''}
                              width={product.featuredImage.width as number}
                              height={product.featuredImage.height as number}
                              quality={60}
                              loader={contentfulLoader}
                              sizes="(min-width: 355px) 355px, 98vw"
                            />
                          )}
                        </div>
                      </div>
                      <div data-equal-size="1">
                        <h2>{product.name}</h2>
                      </div>
                      <div data-equal-size="2">
                        {product.description && <CtfRichtext {...product.description} />}
                      </div>
                      <div data-equal-size="3">
                        {!product.price || product.price === 0 ? (
                          <h2>{'Free'}</h2>
                        ) : (
                          <h2>
                            <FormatCurrency value={product.price} />
                            <span>/{'Month'}</span>
                          </h2>
                        )}
                      </div>
                      {featureNames && featuresGrid && (
                        <div>
                          {featureNames.map(
                            (featureName, i) =>
                              featuresGrid[featureName][product.sys.id] && (
                                <div
                                  key={`${product.sys.id}-${featureName}`}
                                  {...featuresGrid[featureName][product.sys.id].attributes}
                                >
                                  <div data-equal-size={i + 4}>
                                    <CtfRichtext
                                      {...featuresGrid[featureName][product.sys.id].value}
                                    />
                                  </div>
                                </div>
                              )
                          )}
                        </div>
                      )}
                      <div data-equal-size={(featureNames || []).length + 4}>
                        {!product.price || product.price === 0 ? (
                          <h2>{'Free'}</h2>
                        ) : (
                          <h2>
                            <FormatCurrency value={product.price} />
                            <span>/{'Month'}</span>
                          </h2>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
