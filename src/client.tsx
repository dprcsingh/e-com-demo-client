import { ApolloClient, InMemoryCache } from '@apollo/client';

const config = process.env.REACT_APP_GRAPHQL_URI;
const client = new ApolloClient({
  uri: config,
  cache: new InMemoryCache(),
});
export default client;
