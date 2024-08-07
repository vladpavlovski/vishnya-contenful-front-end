// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Kind } = require('graphql')

const generateFetchFunction = (operationName, fetcherName, variablesType) => `
export const get${operationName}Options = (variables: ${variablesType}) =>
  queryOptions({
    queryKey: ${fetcherName}.getKey(variables),
    queryFn: ${fetcherName}.fetcher(variables)
  });
`

module.exports = {
  plugin: (schema, documents, config) => {
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
