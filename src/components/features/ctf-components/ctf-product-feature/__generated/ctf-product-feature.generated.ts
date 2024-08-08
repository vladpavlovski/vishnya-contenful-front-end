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
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';

import { getQueryClient } from '@src/lib/get-query-client'

export type ProductFeatureFieldsFragment = { __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null };

export type CtfProductFeatureQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfProductFeatureQuery = { __typename?: 'Query', topicProductFeature?: (
    { __typename?: 'TopicProductFeature' }
    & ProductFeatureFieldsFragment
  ) | null };


export const ProductFeatureFieldsFragmentDoc = `
    fragment ProductFeatureFields on TopicProductFeature {
  __typename
  sys {
    id
  }
  name
  longDescription {
    json
    links {
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
  shortDescription {
    json
    links {
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
}
    `;
export const CtfProductFeatureDocument = `
    query CtfProductFeature($id: String!, $locale: String, $preview: Boolean) {
  topicProductFeature(id: $id, preview: $preview, locale: $locale) {
    ...ProductFeatureFields
  }
}
    ${ProductFeatureFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfProductFeatureQuery = <
      TData = CtfProductFeatureQuery,
      TError = unknown
    >(
      variables: CtfProductFeatureQueryVariables,
      options?: Omit<UseQueryOptions<CtfProductFeatureQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfProductFeatureQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfProductFeatureQuery, TError, TData>(
      {
    queryKey: ['CtfProductFeature', variables],
    queryFn: customFetcher<CtfProductFeatureQuery, CtfProductFeatureQueryVariables>(CtfProductFeatureDocument, variables),
    ...options
  }
    )};

useCtfProductFeatureQuery.getKey = (variables: CtfProductFeatureQueryVariables) => ['CtfProductFeature', variables];

export const useSuspenseCtfProductFeatureQuery = <
      TData = CtfProductFeatureQuery,
      TError = unknown
    >(
      variables: CtfProductFeatureQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfProductFeatureQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfProductFeatureQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfProductFeatureQuery, TError, TData>(
      {
    queryKey: ['CtfProductFeatureSuspense', variables],
    queryFn: customFetcher<CtfProductFeatureQuery, CtfProductFeatureQueryVariables>(CtfProductFeatureDocument, variables),
    ...options
  }
    )};

useSuspenseCtfProductFeatureQuery.getKey = (variables: CtfProductFeatureQueryVariables) => ['CtfProductFeatureSuspense', variables];


useCtfProductFeatureQuery.fetcher = (variables: CtfProductFeatureQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfProductFeatureQuery, CtfProductFeatureQueryVariables>(CtfProductFeatureDocument, variables, options);


/**
 * The getCtfProductFeatureData is used to fetch data for server-side components.
 * 
 * @param {CtfProductFeatureQueryVariables} variables - The variables required for the GraphQL query.
 * @returns {Promise<unknown>} The data returned by the GraphQL query.
 * 
 * Example usage:
 * 
 * import { getCtfProductFeatureData } from 'path/to/your/output';
 * 
 * const fetchData = async () => {
 *   const data = await getCtfProductFeatureData(variables);
 *   console.log(data);
 * };
 * 
 */

export const getCtfProductFeatureData = async (variables: CtfProductFeatureQueryVariables) => {
  const queryClient = getQueryClient();
  const queryOptions = {
    queryKey: useCtfProductFeatureQuery.getKey(variables),
    queryFn: useCtfProductFeatureQuery.fetcher(variables),
  };
  return queryClient.fetchQuery(queryOptions);
};
