import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import Image, { ImageLoader } from 'next/legacy/image'
import { useTranslation } from 'next-i18next'
import queryString from 'query-string'
import { useMemo, useRef } from 'react'

import { ProductTableFieldsFragment } from './__generated/ctf-product-table.generated'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext'
import { FormatCurrency } from '@src/components/features/format-currency'
import { SectionHeadlines } from '@src/components/features/section-headlines'
import LayoutContext, { defaultLayout } from '@src/layout-context'

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

export const CtfProductTable = (props: ProductTableFieldsFragment) => {
  const { t } = useTranslation()
  const {
    headline,
    subline,
    productsCollection,
    sys: { id }
  } = props

  const inspectorMode = useContentfulInspectorMode()

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
          attributes: inspectorMode({ fieldId, entryId: feature.sys.id }),
          value: feature[fieldId]
        }
      })
    })

    return grid
  }, [featureNames, productsCollection, inspectorMode])

  // Keeping the grid items the same size
  const gridElement = useRef<HTMLDivElement>(null)
  const gridColumnElements = useRef<(HTMLDivElement | null)[]>([])

  return (
    <div ref={gridElement}>
      <div className="">
        <div className="">
          <SectionHeadlines
            headline={headline}
            headlineLivePreviewProps={inspectorMode({ entryId: id, fieldId: 'headline' })}
            subline={subline}
            sublineLivePreviewProps={inspectorMode({ entryId: id, fieldId: 'subline' })}
            className={''}
          />
          {productsCollection && productsCollection.items.length > 0 && (
            <div className="">
              {productsCollection.items.map(
                (product, j) =>
                  product && (
                    <div
                      key={product.sys.id}
                      className=""
                      ref={el => {
                        gridColumnElements.current[j] = el
                      }}
                      {...inspectorMode({
                        entryId: product.sys.id,
                        fieldId: 'internalName'
                      })}
                    >
                      <div
                        className=""
                        {...inspectorMode({
                          entryId: product.sys.id,
                          fieldId: 'featuredImage'
                        })}
                      >
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
                        <h2
                          className={''}
                          {...inspectorMode({
                            entryId: product.sys.id,
                            fieldId: 'name'
                          })}
                        >
                          {product.name}
                        </h2>
                      </div>
                      <div
                        data-equal-size="2"
                        {...inspectorMode({
                          entryId: product.sys.id,
                          fieldId: 'description'
                        })}
                      >
                        {product.description && (
                          <LayoutContext.Provider
                            value={{
                              ...defaultLayout,
                              parent: 'product-description'
                            }}
                          >
                            <CtfRichtext {...product.description} className={''} />
                          </LayoutContext.Provider>
                        )}
                      </div>
                      <div
                        data-equal-size="3"
                        {...inspectorMode({
                          entryId: product.sys.id,
                          fieldId: 'price'
                        })}
                      >
                        {!product.price || product.price === 0 ? (
                          <h2 className={''}>{t('price.free')}</h2>
                        ) : (
                          <h2 className={''}>
                            <FormatCurrency value={product.price} />
                            <span className={''}>/{t('time.month')}</span>
                          </h2>
                        )}
                      </div>
                      {featureNames && featuresGrid && (
                        <LayoutContext.Provider
                          value={{
                            ...defaultLayout,
                            parent: 'product-table'
                          }}
                        >
                          <div className="" />
                          <div
                            {...inspectorMode({
                              entryId: product.sys.id,
                              fieldId: 'features'
                            })}
                          >
                            {featureNames.map(
                              (featureName, i) =>
                                featuresGrid[featureName][product.sys.id] && (
                                  <div
                                    key={`${product.sys.id}-${featureName}`}
                                    className={''}
                                    {...featuresGrid[featureName][product.sys.id].attributes}
                                  >
                                    <div data-equal-size={i + 4} className={''}>
                                      <CtfRichtext
                                        {...featuresGrid[featureName][product.sys.id].value}
                                      />
                                    </div>
                                  </div>
                                )
                            )}
                          </div>
                        </LayoutContext.Provider>
                      )}
                      <div className={''} data-equal-size={(featureNames || []).length + 4}>
                        {!product.price || product.price === 0 ? (
                          <h2 className={''}>{t('price.free')}</h2>
                        ) : (
                          <h2 className={''}>
                            <FormatCurrency value={product.price} />
                            <span className={''}>/{t('time.month')}</span>
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
