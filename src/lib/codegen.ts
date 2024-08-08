import { readFileSync } from 'fs'
import path from 'path'

import { CodegenConfig } from '@graphql-codegen/cli'

import { fetchConfig } from './fetchConfig'

// Read the content of the comment file
const commentContent = readFileSync(path.resolve(__dirname, './warning-comment.txt'), 'utf-8')

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [fetchConfig.endpoint]: fetchConfig.params
    }
  ],
  generates: {
    './src/lib/__generated/graphql.schema.json': {
      plugins: ['introspection']
    },
    './src/lib/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        commentDescriptions: true
      }
    },
    './src/lib/__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./**/*.graphql']
    },
    './src': {
      documents: ['./**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: './lib/__generated/graphql.types.ts',
        folder: '__generated'
      },
      plugins: [
        {
          add: {
            content: commentContent,
            placement: 'prepend'
          }
        },
        'typescript-operations',
        {
          add: {
            content: `
import { getQueryClient } from '@src/lib/get-query-client'
`
          }
        },
        'typescript-react-query',
        './src/lib/fetchFunctionPlugin.ts'
      ],
      config: {
        reactQueryVersion: 5,
        addSuspenseQuery: true,
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        fetcher: '@src/lib/fetchConfig#customFetcher'
      }
    }
  }
}

export default config
