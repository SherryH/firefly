import { Avatar, Text, VStack, HStack, Heading, Image } from '@chakra-ui/react';
import { Layout } from '../../components/Layout/Layout';
import { Offer } from '../../components/Offer/Offer';

// add border radisu to Tag
export default function UserProfilePage() {
  return (
    <Layout>
      <VStack bg="red.100" w="70%" margin="auto" padding="5">
        <Heading marginBottom={10}>螢火蟲計畫</Heading>
        <HStack marginBottom={10}>
          <Avatar size="2xl" />
          <Text fontSize="5xl">User Name</Text>
        </HStack>
        <VStack marginBottom={9} spacing={5} as="ul">
          <Offer as="li">Ukulele Together</Offer>
          <Offer as="li">How to have a balanced diet</Offer>
        </VStack>
        <HStack spacing={5}>
          <Image
            boxSize="150px"
            objectFit="cover"
            src="/static/wine.jpg"
            alt="Dan Abramov"
            borderRadius="lg"
          />
          <Image
            boxSize="150px"
            objectFit="cover"
            src="/static/files.png"
            alt="Dan Abramov"
            borderRadius="lg"
          />
        </HStack>
      </VStack>
    </Layout>
  );
}
