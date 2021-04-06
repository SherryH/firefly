import Head from 'next/head';
import { Box } from '@chakra-ui/react';

export const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Head>
        <title>Project Firefly</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <Box
        as="main"
        mx="auto"
        maxW={['100%', '800px']}
        minH="100%"
        padding="16px"
        border="1px"
        borderColor="gray.100"
        {...rest}
      >
        {children}
      </Box>
    </>
  );
};
