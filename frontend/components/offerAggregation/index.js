import { useState } from 'react';
import { Box, VStack, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import { FaRegUser } from 'react-icons/fa';
import { BiMessageRoundedEdit, BiPlusCircle } from 'react-icons/bi';
import { Offer } from '../Offer/Offer';
import OfferModal from './OfferModal';
import { Icon } from '../Icon';

const ALL_OFFERS_QUERY = gql`
  query ALL_OFFERS_QUERY {
    allOffers {
      title
      id
      description
      offerImages {
        image {
          id
          publicUrlTransformed
        }
      }
      owner {
        id
        name
      }
    }
  }
`;

export default function OfferAggregation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(null);
  const { data, error } = useQuery(ALL_OFFERS_QUERY);
  if (error) {
    console.log(error);
  }
  const allOffers = data?.allOffers;
  const handleOfferClick = (index) => () => {
    setSelectedOfferIndex(allOffers?.[index]);
    onOpen();
  };
  return (
    <Flex direction="column" minH="100%" h="100%">
      <Flex
        justify="space-around"
        padding="24px"
        borderBottom="brand.100"
        borderBottomWidth="1px"
      >
        <Box>
          <Heading fontSize="2xl">09. March. 21</Heading>
        </Box>
        <Heading fontSize="2xl">Berlin</Heading>
      </Flex>
      <Heading
        as="h6"
        size="lg"
        marginTop="24px"
        fontWeight="normal"
        color="brand.100"
      >
        What's offering now
      </Heading>

      <VStack pt="3" spacing={4} flex="1" h="100%" overflow="auto">
        {allOffers?.map(({ title, id }, index) => (
          <Offer key={id} onClick={handleOfferClick(index)}>
            {title}
          </Offer>
        ))}
      </VStack>

      <Flex
        justify="space-evenly"
        marginTop={5}
        borderTop="1px"
        borderColor="gray.100"
        paddingTop="16px"
      >
        <Icon icon={FaRegUser} text="My Profile" disabled />
        <Icon icon={BiMessageRoundedEdit} text="Message" />
        <Icon icon={BiPlusCircle} text="Add Offer" />
      </Flex>
      <OfferModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        offer={selectedOfferIndex}
      />
    </Flex>
  );
}
