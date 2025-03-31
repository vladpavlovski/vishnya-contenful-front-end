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

import { ProductFieldsFragment } from '../../ctf-product/__generated/ctf-product.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragment } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { ProductFieldsFragmentDoc } from '../../ctf-product/__generated/ctf-product.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ProductFeatureFieldsFragmentDoc } from '../../ctf-product-feature/__generated/ctf-product-feature.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ProductTableFieldsFragment = { __typename: 'ComponentProductTable', headline?: string | null, subline?: string | null, sys: { __typename?: 'Sys', id: string }, productsCollection?: { __typename?: 'ComponentProductTableProductsCollection', items: Array<(
      { __typename?: 'TopicProduct' }
      & ProductFieldsFragment
    ) | null> } | null };

export type CtfProductTableQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfProductTableQuery = { __typename?: 'Query', componentProductTable?: (
    { __typename?: 'ComponentProductTable' }
    & ProductTableFieldsFragment
  ) | null };


export const ProductTableFieldsFragmentDoc = `
    fragment ProductTableFields on ComponentProductTable {
  __typename
  sys {
    id
  }
  headline
  subline
  productsCollection(limit: 3) {
    items {
      ...ProductFields
    }
  }
}
    `;
export const CtfProductTableDocument = `
    query CtfProductTable($id: String!, $locale: String, $preview: Boolean) {
  componentProductTable(id: $id, preview: $preview, locale: $locale) {
    ...ProductTableFields
  }
}
    ${ProductTableFieldsFragmentDoc}
${ProductFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${ProductFeatureFieldsFragmentDoc}`;

export const useCtfProductTableQuery = <
      TData = CtfProductTableQuery,
      TError = unknown
    >(
      variables: CtfProductTableQueryVariables,
      options?: Omit<UseQueryOptions<CtfProductTableQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfProductTableQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfProductTableQuery, TError, TData>(
      {
    queryKey: ['CtfProductTable', variables],
    queryFn: customFetcher<CtfProductTableQuery, CtfProductTableQueryVariables>(CtfProductTableDocument, variables),
    ...options
  }
    )};

useCtfProductTableQuery.getKey = (variables: CtfProductTableQueryVariables) => ['CtfProductTable', variables];

export const useSuspenseCtfProductTableQuery = <
      TData = CtfProductTableQuery,
      TError = unknown
    >(
      variables: CtfProductTableQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfProductTableQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfProductTableQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfProductTableQuery, TError, TData>(
      {
    queryKey: ['CtfProductTableSuspense', variables],
    queryFn: customFetcher<CtfProductTableQuery, CtfProductTableQueryVariables>(CtfProductTableDocument, variables),
    ...options
  }
    )};

useSuspenseCtfProductTableQuery.getKey = (variables: CtfProductTableQueryVariables) => ['CtfProductTableSuspense', variables];


useCtfProductTableQuery.fetcher = (variables: CtfProductTableQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfProductTableQuery, CtfProductTableQueryVariables>(CtfProductTableDocument, variables, options);
