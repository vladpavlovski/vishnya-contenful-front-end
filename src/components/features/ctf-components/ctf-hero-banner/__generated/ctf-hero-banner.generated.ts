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
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type HeroBannerFieldsFragment = { __typename: 'ComponentHeroBanner', headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, targetPage?: (
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfHeroBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfHeroBannerQuery = { __typename?: 'Query', componentHeroBanner?: (
    { __typename?: 'ComponentHeroBanner' }
    & HeroBannerFieldsFragment
  ) | null };


export const HeroBannerFieldsFragmentDoc = `
    fragment HeroBannerFields on ComponentHeroBanner {
  __typename
  sys {
    id
  }
  headline
  bodyText {
    json
  }
  ctaText
  targetPage {
    ...PageLinkFields
  }
  image {
    ...AssetFields
  }
  imageStyle
  heroSize
  colorPalette
}
    `;
export const CtfHeroBannerDocument = `
    query CtfHeroBanner($id: String!, $locale: String, $preview: Boolean) {
  componentHeroBanner(id: $id, locale: $locale, preview: $preview) {
    ...HeroBannerFields
  }
}
    ${HeroBannerFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfHeroBannerQuery = <
      TData = CtfHeroBannerQuery,
      TError = unknown
    >(
      variables: CtfHeroBannerQueryVariables,
      options?: Omit<UseQueryOptions<CtfHeroBannerQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfHeroBannerQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfHeroBannerQuery, TError, TData>(
      {
    queryKey: ['CtfHeroBanner', variables],
    queryFn: customFetcher<CtfHeroBannerQuery, CtfHeroBannerQueryVariables>(CtfHeroBannerDocument, variables),
    ...options
  }
    )};

useCtfHeroBannerQuery.getKey = (variables: CtfHeroBannerQueryVariables) => ['CtfHeroBanner', variables];

export const useSuspenseCtfHeroBannerQuery = <
      TData = CtfHeroBannerQuery,
      TError = unknown
    >(
      variables: CtfHeroBannerQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfHeroBannerQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfHeroBannerQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfHeroBannerQuery, TError, TData>(
      {
    queryKey: ['CtfHeroBannerSuspense', variables],
    queryFn: customFetcher<CtfHeroBannerQuery, CtfHeroBannerQueryVariables>(CtfHeroBannerDocument, variables),
    ...options
  }
    )};

useSuspenseCtfHeroBannerQuery.getKey = (variables: CtfHeroBannerQueryVariables) => ['CtfHeroBannerSuspense', variables];


useCtfHeroBannerQuery.fetcher = (variables: CtfHeroBannerQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfHeroBannerQuery, CtfHeroBannerQueryVariables>(CtfHeroBannerDocument, variables, options);
