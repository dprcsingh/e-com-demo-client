import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://e-comm-demo.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
export default client;
