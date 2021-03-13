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
  const [selectedOffer, setSelectedOffer] = useState(null);
  const { data, error } = useQuery(ALL_OFFERS_QUERY);
  if (error) {
    console.log(error);
  }
  const allOffers = data?.allOffers;
  const handleOfferClick = (index) => () => {
    setSelectedOffer(allOffers?.[index]);
    onOpen();
  };
  console.log('data', allOffers);
  return (
    <>
      <Flex justify="space-around" padding="8">
        <Box>
          <Heading fontSize="3xl">2021</Heading>
          <Heading fontSize="3xl">09. March</Heading>
        </Box>
        <Heading fontSize="3xl">Berlin</Heading>
      </Flex>
      <VStack pt="3" spacing={4}>
        {allOffers?.map(({ title, id }, index) => (
          <Offer key={id} onClick={handleOfferClick(index)}>
            {title}
          </Offer>
        ))}
      </VStack>
      <i className="fas fa-user"></i>
      <FaUserAlt />
      <Flex justify="center" onClick={onOpen}>
        <Icon as={FaUserAlt} w={20} h={20} marginX="auto" />
      </Flex>
      <OfferModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        offer={selectedOffer}
      />
    </>
  );
}
