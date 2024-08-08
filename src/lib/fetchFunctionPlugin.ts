/**
 * This custom GraphQL Code Generator plugin is designed to automatically generate
 * TypeScript functions for fetching data using React Query on the server side.
 *
 * Purpose:
 * - The plugin identifies all GraphQL operations (queries) defined in the documents.
 * - For each operation, it generates a corresponding fetch function that uses
 *   React Query's queryClient to fetch data based on the provided variables.
 *
 * Why It Was Created:
 * - Simplify server-side data fetching by generating boilerplate code automatically.
 * - Ensure consistent usage of React Query across different GraphQL queries.
 * - Improve developer productivity by reducing the need to manually write fetch functions.
 *
 * Generated Function:
 * - The generated function is named `get<OperationName>Data` and is designed to fetch data
 *   for server-side components.
 * - It takes the variables required for the GraphQL query as an argument.
 * - It returns a Promise with the data returned by the GraphQL query.
 * - An example usage is provided in the comments of the generated function.
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Kind } = require('graphql')

const generateFetchFunction = (operationName, fetcherName, variablesType) => `
/**
 * The get${operationName}Data is used to fetch data for server-side components.
 * 
 * @param {${variablesType}} variables - The variables required for the GraphQL query.
 * @returns {Promise<unknown>} The data returned by the GraphQL query.
 * 
 * Example usage:
 * 
 * import { get${operationName}Data } from 'path/to/your/output';
 * 
 * const fetchData = async () => {
 *   const data = await get${operationName}Data(variables);
 *   console.log(data);
 * };
 * 
 */

export const get${operationName}Data = async (variables: ${variablesType}) => {
  const queryClient = getQueryClient();
  const queryOptions = {
    queryKey: ${fetcherName}.getKey(variables),
    queryFn: ${fetcherName}.fetcher(variables),
  };
  return queryClient.fetchQuery(queryOptions);
};
`

module.exports = {
  plugin: (schema, documents) => {
    const allOperations = documents.reduce((acc, doc) => {
      if (doc.document) {
        const operations = doc.document.definitions.filter(
          d => d.kind === Kind.OPERATION_DEFINITION
        )
        return acc.concat(operations)
      }
      return acc
    }, [])

    const fetchFunctions = allOperations.map(op => {
      const operationName = op.name.value
      const variablesType = `${operationName}QueryVariables`
      const fetcherName = `use${operationName}Query`
      return generateFetchFunction(operationName, fetcherName, variablesType)
    })

    return fetchFunctions.join('\n')
  }
}
