import { ApolloClient, InMemoryCache } from '@apollo/client';
import withApollo from 'next-with-apollo';
import { getDataFromTree } from '@apollo/client/react/ssr';

function createClient({ initialState }) {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_API,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
