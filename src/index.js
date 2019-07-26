import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'

import App from './App'

const client = new ApolloClient({
  uri: 'http://localhost:4466',
})

const ApolloApp = AppComponent => <AppComponent />

render(ApolloApp(App), document.getElementById('root'))
