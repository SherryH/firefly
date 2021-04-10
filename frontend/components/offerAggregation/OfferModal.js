import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import createDOMPurify from "dompurify";

export default function OfferModal({ isOpen, onClose, offer }) {
  let DOMPurify;
  if (typeof window !== "undefined") {
    DOMPurify = createDOMPurify(window);
  }
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, description, offerImages, owner } = offer || {};
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading
              width="fit-content"
              bgGradient="linear(to bottom, transparent 55%, bg.100 85% 100%)"
            >
              {title}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody minH="60vh">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify?.sanitize(description),
              }}
            />
            <Flex justify="center" marginTop={10} wrap="wrap" gap="8px">
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

          <ModalFooter sx={{ justifyContent: "center" }}>
            <Link href={`/userProfile/${owner?.id}`} passHref>
              <Icon as={FaUserAlt} w={16} h={16} marginX="auto" />
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
