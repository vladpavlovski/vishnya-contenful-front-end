/*****************************************************
 *****************************************************
 *                                                   *
 *              🚨 AUTO-GENERATED FILE 🚨             *
 *                                                   *
 *       This file was automatically generated       *
 *            by GraphQL Code Generator.             *
 *                                                   *
 *           ⚠️  DO NOT MODIFY IT DIRECTLY.           *
 *                                                   *
 *           To regenerate this file, run:           *
 *                                                   *
 *           pnpm graphql-codegen:generate           *
 *                                                   *
 *****************************************************
 *****************************************************/


import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragment } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragmentDoc } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ProductFieldsFragment = { __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<(
      { __typename?: 'TopicProductFeature' }
      & ProductFeatureFieldsFragment
    ) | null> } | null };

export type CtfProductQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfProductQuery = { __typename?: 'Query', topicProduct?: (
    { __typename?: 'TopicProduct' }
    & ProductFieldsFragment
  ) | null };


export const ProductFieldsFragmentDoc = `
    fragment ProductFields on TopicProduct {
  __typename
  sys {
    id
  }
  name
  featuredImage {
    ...AssetFields
  }
  description {
    json
  }
  price
  featuresCollection(limit: 30) {
    items {
      ...ProductFeatureFields
    }
  }
}
    `;
export const CtfProductDocument = `
    query CtfProduct($id: String!, $locale: String, $preview: Boolean) {
  topicProduct(id: $id, preview: $preview, locale: $locale) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${ProductFeatureFieldsFragmentDoc}`;

export const useCtfProductQuery = <
      TData = CtfProductQuery,
      TError = unknown
    >(
      variables: CtfProductQueryVariables,
      options?: Omit<UseQueryOptions<CtfProductQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfProductQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfProductQuery, TError, TData>(
      {
    queryKey: ['CtfProduct', variables],
    queryFn: customFetcher<CtfProductQuery, CtfProductQueryVariables>(CtfProductDocument, variables),
    ...options
  }
    )};

useCtfProductQuery.getKey = (variables: CtfProductQueryVariables) => ['CtfProduct', variables];

export const useSuspenseCtfProductQuery = <
      TData = CtfProductQuery,
      TError = unknown
    >(
      variables: CtfProductQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfProductQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfProductQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfProductQuery, TError, TData>(
      {
    queryKey: ['CtfProductSuspense', variables],
    queryFn: customFetcher<CtfProductQuery, CtfProductQueryVariables>(CtfProductDocument, variables),
    ...options
  }
    )};

useSuspenseCtfProductQuery.getKey = (variables: CtfProductQueryVariables) => ['CtfProductSuspense', variables];


useCtfProductQuery.fetcher = (variables: CtfProductQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfProductQuery, CtfProductQueryVariables>(CtfProductDocument, variables, options);
