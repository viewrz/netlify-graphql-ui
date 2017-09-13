import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from 'react-apollo';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: '/api/graphql'})
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
// registerServiceWorker();
