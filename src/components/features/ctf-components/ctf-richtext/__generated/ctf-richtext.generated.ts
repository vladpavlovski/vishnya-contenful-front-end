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

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
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
