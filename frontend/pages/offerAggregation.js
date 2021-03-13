import Head from 'next/head';
import {
  Box,
  VStack,
  Flex,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
  Lorem,
  Button,
} from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
import { Offer } from '../components/Offer/Offer';

const ALL_OFFERS_QUERY = gql`
  query ALL_OFFERS_QUERY {
    allOffers {
      title
      id
      description
    }
  }
`;

export default function OfferAggregationPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, error } = useQuery(ALL_OFFERS_QUERY);
  if (error) {
    console.log(error);
  }
  const allOffers = data?.allOffers;
  console.log('data', allOffers);
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
        minH="100vh"
        bg="red.100"
        border="2px"
        borderColor="red.200"
      >
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
      </Box>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
}
