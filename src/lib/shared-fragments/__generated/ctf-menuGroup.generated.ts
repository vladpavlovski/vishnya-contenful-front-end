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


import * as Types from '../../__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../components/features/page-link/__generated/page-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../components/features/page-link/__generated/page-link.generated';
export type MenuGroupFieldsFragment = { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<(
    { __typename?: 'Page' }
    & PageLinkFieldsFragment
  ) | null> };


export const MenuGroupFieldsFragmentDoc = `
    fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {
  items {
    ...PageLinkFields
  }
}
    `;