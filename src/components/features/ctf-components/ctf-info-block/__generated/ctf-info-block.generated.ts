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


import * as Types from '../../../../../../__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';

import { getQueryClient } from '@src/lib/get-query-client'

export type InfoBlockFieldsFragment = { __typename: 'ComponentInfoBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, block1Body?: { __typename?: 'ComponentInfoBlockBlock1Body', json: any } | null, block2Image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, block2Body?: { __typename?: 'ComponentInfoBlockBlock2Body', json: any } | null, block3Image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, block3Body?: { __typename?: 'ComponentInfoBlockBlock3Body', json: any } | null };

export type CtfInfoBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfInfoBlockQuery = { __typename?: 'Query', componentInfoBlock?: (
    { __typename?: 'ComponentInfoBlock' }
    & InfoBlockFieldsFragment
  ) | null };


export const InfoBlockFieldsFragmentDoc = `
    fragment InfoBlockFields on ComponentInfoBlock {
  __typename
  sys {
    id
  }
  headline
  subline
  block1Image {
    ...AssetFields
  }
  block1Body {
    json
  }
  block2Image {
    ...AssetFields
  }
  block2Body {
    json
  }
  block3Image {
    ...AssetFields
  }
  block3Body {
    json
  }
  colorPalette
}
    `;
export const CtfInfoBlockDocument = `
    query CtfInfoBlock($id: String!, $locale: String, $preview: Boolean) {
  componentInfoBlock(id: $id, locale: $locale, preview: $preview) {
    ...InfoBlockFields
  }
}
    ${InfoBlockFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfInfoBlockQuery = <
      TData = CtfInfoBlockQuery,
      TError = unknown
    >(
      variables: CtfInfoBlockQueryVariables,
      options?: Omit<UseQueryOptions<CtfInfoBlockQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfInfoBlockQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfInfoBlockQuery, TError, TData>(
      {
    queryKey: ['CtfInfoBlock', variables],
    queryFn: customFetcher<CtfInfoBlockQuery, CtfInfoBlockQueryVariables>(CtfInfoBlockDocument, variables),
    ...options
  }
    )};

useCtfInfoBlockQuery.getKey = (variables: CtfInfoBlockQueryVariables) => ['CtfInfoBlock', variables];

export const useSuspenseCtfInfoBlockQuery = <
      TData = CtfInfoBlockQuery,
      TError = unknown
    >(
      variables: CtfInfoBlockQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfInfoBlockQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfInfoBlockQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfInfoBlockQuery, TError, TData>(
      {
    queryKey: ['CtfInfoBlockSuspense', variables],
    queryFn: customFetcher<CtfInfoBlockQuery, CtfInfoBlockQueryVariables>(CtfInfoBlockDocument, variables),
    ...options
  }
    )};

useSuspenseCtfInfoBlockQuery.getKey = (variables: CtfInfoBlockQueryVariables) => ['CtfInfoBlockSuspense', variables];


useCtfInfoBlockQuery.fetcher = (variables: CtfInfoBlockQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfInfoBlockQuery, CtfInfoBlockQueryVariables>(CtfInfoBlockDocument, variables, options);


/**
 * The getCtfInfoBlockData is used to fetch data for server-side components.
 * 
 * @param {CtfInfoBlockQueryVariables} variables - The variables required for the GraphQL query.
 * @returns {Promise<unknown>} The data returned by the GraphQL query.
 * 
 * Example usage:
 * 
 * import { getCtfInfoBlockData } from 'path/to/your/output';
 * 
 * const fetchData = async () => {
 *   const data = await getCtfInfoBlockData(variables);
 *   console.log(data);
 * };
 * 
 */

export const getCtfInfoBlockData = async (variables: CtfInfoBlockQueryVariables) => {
  const queryClient = getQueryClient();
  const queryOptions = {
    queryKey: useCtfInfoBlockQuery.getKey(variables),
    queryFn: useCtfInfoBlockQuery.fetcher(variables),
  };
  return queryClient.fetchQuery(queryOptions);
};
