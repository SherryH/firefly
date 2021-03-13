import Head from 'next/head';
import { Box, Avatar, Text, VStack, HStack } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

const ALL_USERPROFILES_QUERY = gql`
  query ALL_USERPROFILES_QUERY {
    allUserProfiles {
      name
      id
      userImage {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function UserProfile() {
  const { data, error } = useQuery(ALL_USERPROFILES_QUERY);
  if (error) {
    console.log(error);
  }
  const userProfiles = data?.allUserProfiles;
  console.log('data', data);
  return (
    <>
      <Head>
        <title>Project Firefly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        as="main"
        mx="auto"
        maxW={['100%', '800px']}
        minH="100vh"
        bg="red.100"
        border="2px"
        borderColor="red.200"
      >
        <VStack pt="3">
          {userProfiles?.map(({ name, id, userImage }) => (
            <Link href={`/userProfile/${id}`} key={id}>
              <HStack mt="2">
                <Avatar src={userImage?.image?.publicUrlTransformed} />
                <Text fontSize="2xl"> {name}</Text>
              </HStack>
            </Link>
          ))}
        </VStack>
      </Box>
    </>
  );
}
