import { ApolloClient, InMemoryCache } from '@apollo/client'
import { FAUNA_KEY } from '../../env.js'

export const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${FAUNA_KEY}`,
  },
})
