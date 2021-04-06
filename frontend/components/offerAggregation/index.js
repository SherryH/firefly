import Head from 'next/head';
import {
  Box,
  VStack,
  Flex,
  Heading,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
import { Offer } from '../Offer/Offer';
import OfferModal from './OfferModal';
import { useState } from 'react';

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
    <Flex direction="column" minH="100%">
      <Flex justify="space-around" padding="24px" borderBottom="brand.100" borderBottomWidth="1px">
        <Box>
          <Heading fontSize="2xl">09. March. 21</Heading>
        </Box>
        <Heading fontSize="2xl">Berlin</Heading>
      </Flex>
      <Heading as="h6" size="lg" marginTop="24px" fontWeight="normal" color="brand.100">What's offering now</Heading>
      
      <VStack pt="3" spacing={4} flex="1">
        {allOffers?.map(({ title, id }, index) => (
          <Offer key={id} onClick={handleOfferClick(index)}>
            {title}
          </Offer>
        ))}
      </VStack>

      <Flex justify="center" onClick={onOpen} marginTop={5}>
        <Icon as={FaUserAlt} w={20} h={20} marginX="auto" />
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
