import { ApolloClient, InMemoryCache } from '@apollo/client';
import withApollo from 'next-with-apollo';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_API,
  cache: new InMemoryCache(),
});

function createClient({ initialState }) {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_API,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default withApollo(createClient);
