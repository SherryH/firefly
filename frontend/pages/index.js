import Head from 'next/head';
import { Box, Avatar, Text, VStack, HStack } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';

const ALL_USERPROFILES_QUERY = gql`
  query ALL_USERPROFILES_QUERY {
    allUserProfiles {
      name
      id
    }
  }
`;

export default function Home(props) {
  const { data, error } = useQuery(ALL_USERPROFILES_QUERY);
  if (error) {
    console.log(error);
  }
  const userProfiles = data?.allUserProfiles;
  return (
    <>
      <Head>
        <title>Project Firefly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        as="main"
        mx="auto"
        maxW={['100%']}
        minH="100vh"
        bg="red.100"
        border="2px"
        borderColor="red.200"
      >
        <VStack pt="3">
          {userProfiles.map(({ name, id }) => (
            <HStack mt="2" key={id}>
              <Avatar />
              <Text fontSize="2xl"> {name}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </>
  );
}
