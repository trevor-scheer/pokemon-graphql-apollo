import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  toIdValue
} from 'react-apollo';
import './global.scss';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
});
const client = new ApolloClient({
  networkInterface,
  customResolvers: {
    Query: {
      team: (_, { id }) =>
        toIdValue(client.dataIdFromObject({ __typename: 'team', id }))
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
