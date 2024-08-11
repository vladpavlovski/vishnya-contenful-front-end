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
export type CtaFieldsFragment = { __typename: 'ComponentCta', headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null };

export type CtfCtaQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfCtaQuery = { __typename?: 'Query', componentCta?: (
    { __typename?: 'ComponentCta' }
    & CtaFieldsFragment
  ) | null };


export const CtaFieldsFragmentDoc = `
    fragment CtaFields on ComponentCta {
  __typename
  sys {
    id
  }
  headline
  subline {
    json
  }
  ctaText
  targetPage {
    ...PageLinkFields
  }
  urlParameters
  colorPalette
}
    `;
export const CtfCtaDocument = `
    query CtfCta($id: String!, $locale: String, $preview: Boolean) {
  componentCta(id: $id, locale: $locale, preview: $preview) {
    ...CtaFields
  }
}
    ${CtaFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}`;

export const useCtfCtaQuery = <
      TData = CtfCtaQuery,
      TError = unknown
    >(
      variables: CtfCtaQueryVariables,
      options?: Omit<UseQueryOptions<CtfCtaQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfCtaQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfCtaQuery, TError, TData>(
      {
    queryKey: ['CtfCta', variables],
    queryFn: customFetcher<CtfCtaQuery, CtfCtaQueryVariables>(CtfCtaDocument, variables),
    ...options
  }
    )};

useCtfCtaQuery.getKey = (variables: CtfCtaQueryVariables) => ['CtfCta', variables];

export const useSuspenseCtfCtaQuery = <
      TData = CtfCtaQuery,
      TError = unknown
    >(
      variables: CtfCtaQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfCtaQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfCtaQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfCtaQuery, TError, TData>(
      {
    queryKey: ['CtfCtaSuspense', variables],
    queryFn: customFetcher<CtfCtaQuery, CtfCtaQueryVariables>(CtfCtaDocument, variables),
    ...options
  }
    )};

useSuspenseCtfCtaQuery.getKey = (variables: CtfCtaQueryVariables) => ['CtfCtaSuspense', variables];


useCtfCtaQuery.fetcher = (variables: CtfCtaQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfCtaQuery, CtfCtaQueryVariables>(CtfCtaDocument, variables, options);
