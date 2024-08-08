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
import { MenuGroupFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-menuGroup.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { MenuGroupFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-menuGroup.generated';
import { useQuery, useSuspenseQuery, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';

import { getQueryClient } from '@src/lib/get-query-client'

export type NavigationFieldsFragment = { __typename?: 'NavigationMenuCollection', items: Array<{ __typename?: 'NavigationMenu', menuItemsCollection?: { __typename?: 'NavigationMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, link?: (
          { __typename?: 'Page' }
          & PageLinkFieldsFragment
        ) | null, children?: (
          { __typename?: 'MenuGroupFeaturedPagesCollection' }
          & MenuGroupFieldsFragment
        ) | null } | null> } | null } | null> };

export type CtfNavigationQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfNavigationQuery = { __typename?: 'Query', navigationMenuCollection?: (
    { __typename?: 'NavigationMenuCollection' }
    & NavigationFieldsFragment
  ) | null };


export const NavigationFieldsFragmentDoc = `
    fragment NavigationFields on NavigationMenuCollection {
  items {
    menuItemsCollection {
      items {
        __typename
        sys {
          id
        }
        groupName
        link: groupLink {
          ...PageLinkFields
        }
        children: featuredPagesCollection {
          ...MenuGroupFields
        }
      }
    }
  }
}
    `;
export const CtfNavigationDocument = `
    query CtfNavigation($locale: String, $preview: Boolean) {
  navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {
    ...NavigationFields
  }
}
    ${NavigationFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}
${MenuGroupFieldsFragmentDoc}`;

export const useCtfNavigationQuery = <
      TData = CtfNavigationQuery,
      TError = unknown
    >(
      variables?: CtfNavigationQueryVariables,
      options?: Omit<UseQueryOptions<CtfNavigationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfNavigationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfNavigationQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['CtfNavigation'] : ['CtfNavigation', variables],
    queryFn: customFetcher<CtfNavigationQuery, CtfNavigationQueryVariables>(CtfNavigationDocument, variables),
    ...options
  }
    )};

useCtfNavigationQuery.getKey = (variables?: CtfNavigationQueryVariables) => variables === undefined ? ['CtfNavigation'] : ['CtfNavigation', variables];

export const useSuspenseCtfNavigationQuery = <
      TData = CtfNavigationQuery,
      TError = unknown
    >(
      variables?: CtfNavigationQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CtfNavigationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CtfNavigationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CtfNavigationQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['CtfNavigationSuspense'] : ['CtfNavigationSuspense', variables],
    queryFn: customFetcher<CtfNavigationQuery, CtfNavigationQueryVariables>(CtfNavigationDocument, variables),
    ...options
  }
    )};

useSuspenseCtfNavigationQuery.getKey = (variables?: CtfNavigationQueryVariables) => variables === undefined ? ['CtfNavigationSuspense'] : ['CtfNavigationSuspense', variables];


useCtfNavigationQuery.fetcher = (variables?: CtfNavigationQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfNavigationQuery, CtfNavigationQueryVariables>(CtfNavigationDocument, variables, options);


/**
 * The getCtfNavigationData is used to fetch data for server-side components.
 * 
 * @param {CtfNavigationQueryVariables} variables - The variables required for the GraphQL query.
 * @returns {Promise<unknown>} The data returned by the GraphQL query.
 * 
 * Example usage:
 * 
 * import { getCtfNavigationData } from 'path/to/your/output';
 * 
 * const fetchData = async () => {
 *   const data = await getCtfNavigationData(variables);
 *   console.log(data);
 * };
 * 
 */

export const getCtfNavigationData = async (variables: CtfNavigationQueryVariables) => {
  const queryClient = getQueryClient();
  const queryOptions = {
    queryKey: useCtfNavigationQuery.getKey(variables),
    queryFn: useCtfNavigationQuery.fetcher(variables),
  };
  return queryClient.fetchQuery(queryOptions);
};
