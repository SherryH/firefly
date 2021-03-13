import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
// import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';

export default function OfferModal({ isOpen, onClose, offer }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, description, offerImages, owner } = offer || {};
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading>{title}</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody minH="60vh">
            <Text>{description}</Text>
            <Flex
              justify="center"
              marginTop={10}
              wrap="wrap"
              sx={{ gap: '8px' }}
            >
              {offerImages?.map(({ image }) => (
                <Image
                  key={image.id}
                  boxSize="180px"
                  objectFit="cover"
                  src={image.publicUrlTransformed}
                  alt={title}
                  borderRadius="lg"
                />
              ))}
            </Flex>
          </ModalBody>

          <ModalFooter sx={{ justifyContent: 'center' }}>
            <Link href={`/userProfile/${owner?.id}`}>
              <Icon as={FaUserAlt} w={16} h={16} marginX="auto" />
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
