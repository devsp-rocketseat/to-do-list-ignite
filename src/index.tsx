import { ApolloProvider } from '@apollo/client'
import { render } from 'react-dom'

import { client } from './services/faunaGQL'
import { App } from './App'

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
