import { gql, useQuery } from '@apollo/client';
import {
  Avatar,
  Text,
  VStack,
  HStack,
  Heading,
  Image,
  Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Offer } from '../Offer/Offer';

const USERPROFILE_QUERY = gql`
  query singleUser($id: ID!) {
    UserProfile(where: { id: $id }) {
      id
      name
      offers {
        title
        description
        offerImages {
          image {
            id
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function UserProfilePage({ query }) {
  const [allImages, setAllImages] = useState([]);
  const { id } = query;
  const { data, error, loading } = useQuery(USERPROFILE_QUERY, {
    variables: { id },
  });
  const { name, offers } = data?.UserProfile || {};

  useEffect(() => {
    // when data is returned, compute allImages of the offers
    const allImages = offers?.reduce((pre, cur) => {
      return pre.concat(cur.offerImages).map((image) => image?.image);
    }, []);
    setAllImages(allImages);
  }, [name]);

  return (
    <VStack bg="red.100" w="70%" margin="auto" padding="5">
      <Link href="/">
        <Heading marginBottom={10}>螢火蟲計畫</Heading>
      </Link>
      <HStack marginBottom={10}>
        <Avatar size="2xl" />
        <Text fontSize="5xl">{name}</Text>
      </HStack>
      <VStack marginBottom={9} spacing={5} as="ul">
        {offers?.map(({ title, id }) => (
          <Offer as="li" key={id}>
            {title}
          </Offer>
        ))}
      </VStack>
      <HStack spacing={5}>
        {allImages?.map(({ publicUrlTransformed }) => (
          <Image
            boxSize="150px"
            objectFit="cover"
            src={publicUrlTransformed}
            alt="offerImage"
            borderRadius="lg"
          />
        ))}
      </HStack>
    </VStack>
  );
}
