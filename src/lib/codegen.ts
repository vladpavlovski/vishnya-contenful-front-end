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
    './__generated/graphql.schema.json': {
      plugins: ['introspection']
    },
    './__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        commentDescriptions: true
      }
    },
    './__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['../**/*.graphql']
    },
    './': {
      documents: ['../**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '__generated/graphql.types.ts',
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
