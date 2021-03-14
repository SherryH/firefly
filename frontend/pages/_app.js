// import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps, ...otherProps }) {
  const { apollo } = otherProps;
  return (
    <ApolloProvider client={apollo}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

// getInitialProps() gets context in server which was not passed to getStaticProps
// getStaticProps prob gets context only when it is rehydrated due to

// ctx is ApolloContext. ctx gets merged inside context which is passed into getInitialProps
MyApp.getInitialProps = async (context) => {
  const { Component, ctx } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
    console.log('compoennt getInitialProps pageprops?', pageProps);
  }
  pageProps.query = ctx.query;
  return {
    pageProps,
  };
};

export default withData(MyApp);
