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

import { ComponentReferenceFields_ComponentCta_Fragment, ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentInfoBlock_Fragment, ComponentReferenceFields_ComponentProductTable_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_FooterMenu_Fragment, ComponentReferenceFields_MenuGroup_Fragment, ComponentReferenceFields_NavigationMenu_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_TopicBusinessInfo_Fragment, ComponentReferenceFields_TopicPerson_Fragment, ComponentReferenceFields_TopicProduct_Fragment, ComponentReferenceFields_TopicProductFeature_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';

import { getQueryClient } from '@src/lib/get-query-client'

export type QuoteFieldsFragment = { __typename: 'ComponentQuote', quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<(
          { __typename?: 'ComponentCta' }
          & ComponentReferenceFields_ComponentCta_Fragment
        ) | (
          { __typename?: 'ComponentDuplex' }
          & ComponentReferenceFields_ComponentDuplex_Fragment
        ) | (
          { __typename?: 'ComponentHeroBanner' }
          & ComponentReferenceFields_ComponentHeroBanner_Fragment
        ) | (
          { __typename?: 'ComponentInfoBlock' }
          & ComponentReferenceFields_ComponentInfoBlock_Fragment
        ) | (
          { __typename?: 'ComponentProductTable' }
          & ComponentReferenceFields_ComponentProductTable_Fragment
        ) | (
          { __typename?: 'ComponentQuote' }
          & ComponentReferenceFields_ComponentQuote_Fragment
        ) | (
          { __typename?: 'ComponentTextBlock' }
          & ComponentReferenceFields_ComponentTextBlock_Fragment
        ) | (
          { __typename?: 'FooterMenu' }
          & ComponentReferenceFields_FooterMenu_Fragment
        ) | (
          { __typename?: 'MenuGroup' }
          & ComponentReferenceFields_MenuGroup_Fragment
        ) | (
          { __typename?: 'NavigationMenu' }
          & ComponentReferenceFields_NavigationMenu_Fragment
        ) | (
          { __typename?: 'Page' }
          & ComponentReferenceFields_Page_Fragment
        ) | (
          { __typename?: 'Seo' }
          & ComponentReferenceFields_Seo_Fragment
        ) | (
          { __typename?: 'TopicBusinessInfo' }
          & ComponentReferenceFields_TopicBusinessInfo_Fragment
        ) | (
          { __typename?: 'TopicPerson' }
          & ComponentReferenceFields_TopicPerson_Fragment
        ) | (
          { __typename?: 'TopicProduct' }
          & ComponentReferenceFields_TopicProduct_Fragment
        ) | (
          { __typename?: 'TopicProductFeature' }
          & ComponentReferenceFields_TopicProductFeature_Fragment
        ) | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfQuoteQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfQuoteQuery = { __typename?: 'Query', componentQuote?: (
    { __typename?: 'ComponentQuote' }
    & QuoteFieldsFragment
  ) | null };


export const QuoteFieldsFragmentDoc = `
    fragment QuoteFields on ComponentQuote {
  __typename
  sys {
    id
  }
  quote {
    json
    links {
      entries {
        block {
          ...ComponentReferenceFields
        }
      }
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
  quoteAlignment
  image {
    ...AssetFields
  }
  imagePosition
  colorPalette
}
    `;
export const CtfQuoteDocument = `
    query CtfQuote($id: String!, $locale: String, $preview: Boolean) {
  componentQuote(id: $id, locale: $locale, preview: $preview) {
    ...QuoteFields
  }
}
    ${QuoteFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfQuoteQuery = <
      TData = CtfQuoteQuery,
      TError = unknown
    >(
      variables: CtfQuoteQueryVariables,
      options?: Omit<UseQueryOptions<CtfQuoteQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfQuoteQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfQuoteQuery, TError, TData>(
      {
    queryKey: ['CtfQuote', variables],
    queryFn: customFetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables),
    ...options
  }
    )};

useCtfQuoteQuery.getKey = (variables: CtfQuoteQueryVariables) => ['CtfQuote', variables];

export const useSuspenseCtfQuoteQuery = <
      TData = CtfQuoteQuery,
      TError = unknown
    >(
      variables: CtfQuoteQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfQuoteQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfQuoteQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfQuoteQuery, TError, TData>(
      {
    queryKey: ['CtfQuoteSuspense', variables],
    queryFn: customFetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables),
    ...options
  }
    )};

useSuspenseCtfQuoteQuery.getKey = (variables: CtfQuoteQueryVariables) => ['CtfQuoteSuspense', variables];


useCtfQuoteQuery.fetcher = (variables: CtfQuoteQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables, options);


/**
 * The getCtfQuoteData is used to fetch data for server-side components.
 * 
 * @param {CtfQuoteQueryVariables} variables - The variables required for the GraphQL query.
 * @returns {Promise<unknown>} The data returned by the GraphQL query.
 * 
 * Example usage:
 * 
 * import { getCtfQuoteData } from 'path/to/your/output';
 * 
 * const fetchData = async () => {
 *   const data = await getCtfQuoteData(variables);
 *   console.log(data);
 * };
 * 
 */

export const getCtfQuoteData = async (variables: CtfQuoteQueryVariables) => {
  const queryClient = getQueryClient();
  const queryOptions = {
    queryKey: useCtfQuoteQuery.getKey(variables),
    queryFn: useCtfQuoteQuery.fetcher(variables),
  };
  return queryClient.fetchQuery(queryOptions);
};
