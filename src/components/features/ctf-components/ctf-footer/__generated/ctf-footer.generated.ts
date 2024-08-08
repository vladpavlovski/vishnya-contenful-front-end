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

import { MenuGroupFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-menuGroup.generated';
import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { MenuGroupFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-menuGroup.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';

import { getQueryClient } from '@src/lib/get-query-client'

export type FooterFieldsFragment = { __typename?: 'FooterMenuCollection', items: Array<{ __typename: 'FooterMenu', twitterLink?: string | null, facebookLink?: string | null, linkedinLink?: string | null, instagramLink?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'FooterMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, featuredPagesCollection?: (
          { __typename?: 'MenuGroupFeaturedPagesCollection' }
          & MenuGroupFieldsFragment
        ) | null } | null> } | null, legalLinks?: { __typename?: 'MenuGroup', featuredPagesCollection?: (
        { __typename?: 'MenuGroupFeaturedPagesCollection' }
        & MenuGroupFieldsFragment
      ) | null } | null } | null> };

export type CtfFooterQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfFooterQuery = { __typename?: 'Query', footerMenuCollection?: (
    { __typename?: 'FooterMenuCollection' }
    & FooterFieldsFragment
  ) | null };


export const FooterFieldsFragmentDoc = `
    fragment FooterFields on FooterMenuCollection {
  items {
    __typename
    sys {
      id
    }
    menuItemsCollection {
      items {
        __typename
        groupName
        sys {
          id
        }
        featuredPagesCollection {
          ...MenuGroupFields
        }
      }
    }
    legalLinks {
      featuredPagesCollection {
        ...MenuGroupFields
      }
    }
    twitterLink
    facebookLink
    linkedinLink
    instagramLink
  }
}
    `;
export const CtfFooterDocument = `
    query CtfFooter($locale: String, $preview: Boolean) {
  footerMenuCollection(locale: $locale, preview: $preview, limit: 1) {
    ...FooterFields
  }
}
    ${FooterFieldsFragmentDoc}
${MenuGroupFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}`;

export const useCtfFooterQuery = <
      TData = CtfFooterQuery,
      TError = unknown
    >(
      variables?: CtfFooterQueryVariables,
      options?: Omit<UseQueryOptions<CtfFooterQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfFooterQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfFooterQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['CtfFooter'] : ['CtfFooter', variables],
    queryFn: customFetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables),
    ...options
  }
    )};

useCtfFooterQuery.getKey = (variables?: CtfFooterQueryVariables) => variables === undefined ? ['CtfFooter'] : ['CtfFooter', variables];

export const useSuspenseCtfFooterQuery = <
      TData = CtfFooterQuery,
      TError = unknown
    >(
      variables?: CtfFooterQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfFooterQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfFooterQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfFooterQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['CtfFooterSuspense'] : ['CtfFooterSuspense', variables],
    queryFn: customFetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables),
    ...options
  }
    )};

useSuspenseCtfFooterQuery.getKey = (variables?: CtfFooterQueryVariables) => variables === undefined ? ['CtfFooterSuspense'] : ['CtfFooterSuspense', variables];


useCtfFooterQuery.fetcher = (variables?: CtfFooterQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables, options);


/**
 * The getCtfFooterData is used to fetch data for server-side components.
 * 
 * @param {CtfFooterQueryVariables} variables - The variables required for the GraphQL query.
 * @returns {Promise<unknown>} The data returned by the GraphQL query.
 * 
 * Example usage:
 * 
 * import { getCtfFooterData } from 'path/to/your/output';
 * 
 * const fetchData = async () => {
 *   const data = await getCtfFooterData(variables);
 *   console.log(data);
 * };
 * 
 */

export const getCtfFooterData = async (variables: CtfFooterQueryVariables) => {
  const queryClient = getQueryClient();
  const queryOptions = {
    queryKey: useCtfFooterQuery.getKey(variables),
    queryFn: useCtfFooterQuery.fetcher(variables),
  };
  return queryClient.fetchQuery(queryOptions);
};
