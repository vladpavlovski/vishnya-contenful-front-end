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

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';

import { getQueryClient } from '@src/lib/get-query-client'

export type RichTextHyperlinkFieldsFragment = { __typename?: 'Query', page?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null };

export type CtfRichTextHyperlinkQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfRichTextHyperlinkQuery = (
  { __typename?: 'Query' }
  & RichTextHyperlinkFieldsFragment
);


export const RichTextHyperlinkFieldsFragmentDoc = `
    fragment RichTextHyperlinkFields on Query {
  page(id: $id, preview: $preview, locale: $locale) {
    ...PageLinkFields
  }
}
    `;
export const CtfRichTextHyperlinkDocument = `
    query CtfRichTextHyperlink($id: String!, $locale: String, $preview: Boolean) {
  ...RichTextHyperlinkFields
}
    ${RichTextHyperlinkFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}`;

export const useCtfRichTextHyperlinkQuery = <
      TData = CtfRichTextHyperlinkQuery,
      TError = unknown
    >(
      variables: CtfRichTextHyperlinkQueryVariables,
      options?: Omit<UseQueryOptions<CtfRichTextHyperlinkQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfRichTextHyperlinkQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfRichTextHyperlinkQuery, TError, TData>(
      {
    queryKey: ['CtfRichTextHyperlink', variables],
    queryFn: customFetcher<CtfRichTextHyperlinkQuery, CtfRichTextHyperlinkQueryVariables>(CtfRichTextHyperlinkDocument, variables),
    ...options
  }
    )};

useCtfRichTextHyperlinkQuery.getKey = (variables: CtfRichTextHyperlinkQueryVariables) => ['CtfRichTextHyperlink', variables];

export const useSuspenseCtfRichTextHyperlinkQuery = <
      TData = CtfRichTextHyperlinkQuery,
      TError = unknown
    >(
      variables: CtfRichTextHyperlinkQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfRichTextHyperlinkQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfRichTextHyperlinkQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfRichTextHyperlinkQuery, TError, TData>(
      {
    queryKey: ['CtfRichTextHyperlinkSuspense', variables],
    queryFn: customFetcher<CtfRichTextHyperlinkQuery, CtfRichTextHyperlinkQueryVariables>(CtfRichTextHyperlinkDocument, variables),
    ...options
  }
    )};

useSuspenseCtfRichTextHyperlinkQuery.getKey = (variables: CtfRichTextHyperlinkQueryVariables) => ['CtfRichTextHyperlinkSuspense', variables];


useCtfRichTextHyperlinkQuery.fetcher = (variables: CtfRichTextHyperlinkQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfRichTextHyperlinkQuery, CtfRichTextHyperlinkQueryVariables>(CtfRichTextHyperlinkDocument, variables, options);


/**
 * The getCtfRichTextHyperlinkData is used to fetch data for server-side components.
 * 
 * @param {CtfRichTextHyperlinkQueryVariables} variables - The variables required for the GraphQL query.
 * @returns {Promise<unknown>} The data returned by the GraphQL query.
 * 
 * Example usage:
 * 
 * import { getCtfRichTextHyperlinkData } from 'path/to/your/output';
 * 
 * const fetchData = async () => {
 *   const data = await getCtfRichTextHyperlinkData(variables);
 *   console.log(data);
 * };
 * 
 */

export const getCtfRichTextHyperlinkData = async (variables: CtfRichTextHyperlinkQueryVariables) => {
  const queryClient = getQueryClient();
  const queryOptions = {
    queryKey: useCtfRichTextHyperlinkQuery.getKey(variables),
    queryFn: useCtfRichTextHyperlinkQuery.fetcher(variables),
  };
  return queryClient.fetchQuery(queryOptions);
};
