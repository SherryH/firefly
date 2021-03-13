import { Box } from '@chakra-ui/react';

export const Layout = ({ children, ...rest }) => {
  return (
    <Box
      as="main"
      mx="auto"
      maxW={['100%', '800px']}
      minH="100vw"
      minH="100vh"
      paddingY={6}
      {...rest}
    >
      {children}
    </Box>
  );
};
