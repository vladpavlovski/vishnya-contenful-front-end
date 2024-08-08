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

export type PersonFieldsFragment = { __typename: 'TopicPerson', name?: string | null, website?: string | null, location?: string | null, cardStyle?: boolean | null, sys: { __typename?: 'Sys', id: string }, bio?: { __typename?: 'TopicPersonBio', json: any } | null, avatar?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfPersonQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfPersonQuery = { __typename?: 'Query', topicPerson?: (
    { __typename?: 'TopicPerson' }
    & PersonFieldsFragment
  ) | null };


export const PersonFieldsFragmentDoc = `
    fragment PersonFields on TopicPerson {
  __typename
  sys {
    id
  }
  name
  bio {
    json
  }
  avatar {
    ...AssetFields
  }
  website
  location
  cardStyle
}
    `;
export const CtfPersonDocument = `
    query CtfPerson($id: String!, $locale: String, $preview: Boolean) {
  topicPerson(id: $id, preview: $preview, locale: $locale) {
    ...PersonFields
  }
}
    ${PersonFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfPersonQuery = <
      TData = CtfPersonQuery,
      TError = unknown
    >(
      variables: CtfPersonQueryVariables,
      options?: Omit<UseQueryOptions<CtfPersonQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfPersonQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfPersonQuery, TError, TData>(
      {
    queryKey: ['CtfPerson', variables],
    queryFn: customFetcher<CtfPersonQuery, CtfPersonQueryVariables>(CtfPersonDocument, variables),
    ...options
  }
    )};

useCtfPersonQuery.getKey = (variables: CtfPersonQueryVariables) => ['CtfPerson', variables];

export const useSuspenseCtfPersonQuery = <
      TData = CtfPersonQuery,
      TError = unknown
    >(
      variables: CtfPersonQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfPersonQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfPersonQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfPersonQuery, TError, TData>(
      {
    queryKey: ['CtfPersonSuspense', variables],
    queryFn: customFetcher<CtfPersonQuery, CtfPersonQueryVariables>(CtfPersonDocument, variables),
    ...options
  }
    )};

useSuspenseCtfPersonQuery.getKey = (variables: CtfPersonQueryVariables) => ['CtfPersonSuspense', variables];


useCtfPersonQuery.fetcher = (variables: CtfPersonQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPersonQuery, CtfPersonQueryVariables>(CtfPersonDocument, variables, options);


/**
 * The getCtfPersonData is used to fetch data for server-side components.
 * 
 * @param {CtfPersonQueryVariables} variables - The variables required for the GraphQL query.
 * @returns {Promise<unknown>} The data returned by the GraphQL query.
 * 
 * Example usage:
 * 
 * import { getCtfPersonData } from 'path/to/your/output';
 * 
 * const fetchData = async () => {
 *   const data = await getCtfPersonData(variables);
 *   console.log(data);
 * };
 * 
 */

export const getCtfPersonData = async (variables: CtfPersonQueryVariables) => {
  const queryClient = getQueryClient();
  const queryOptions = {
    queryKey: useCtfPersonQuery.getKey(variables),
    queryFn: useCtfPersonQuery.fetcher(variables),
  };
  return queryClient.fetchQuery(queryOptions);
};
