import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";
import { Layout } from "../components/Layout";
import { theme } from "../lib/chakraTheme";

function MyApp({ Component, pageProps, ...otherProps }) {
  const { apollo } = otherProps;
  return (
    <ApolloProvider client={apollo}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

// getInitialProps() gets context in server which was not passed to getStaticProps
// getStaticProps prob gets context only when it is rehydrated

// we may not need getInitialProps https://tomanagle.medium.com/create-a-server-side-rendering-graphql-client-with-next-js-and-apollo-client-acd397f70c64
// ctx is ApolloContext. ctx gets merged inside context which is passed into getInitialProps
MyApp.getInitialProps = async (context) => {
  const { Component, ctx } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
    console.log("compoennt getInitialProps pageprops?", pageProps);
  }
  pageProps.query = ctx.query;
  return {
    pageProps,
  };
};

export default withData(MyApp);
