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

const ALL_OFFERS_QUERY = gql`
  query ALL_OFFERS_QUERY {
    allOffers {
      title
      id
      description
    }
  }
`;

export default function OfferAggregation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, error } = useQuery(ALL_OFFERS_QUERY);
  if (error) {
    console.log(error);
  }
  const allOffers = data?.allOffers;
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
        {allOffers?.map(({ title, id }) => (
          <Link href="/" key={id} passHref>
            <Offer>{title}</Offer>
          </Link>
        ))}
      </VStack>
      <i className="fas fa-user"></i>
      <FaUserAlt />
      <Flex justify="center" onClick={onOpen}>
        <Icon as={FaUserAlt} w={20} h={20} marginX="auto" />
      </Flex>
      <OfferModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  );
}
