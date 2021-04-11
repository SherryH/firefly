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
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import createDOMPurify from "dompurify";

export default function OfferModal({ isOpen, onClose, offer }) {
  let DOMPurify;
  if (typeof window !== "undefined") {
    DOMPurify = createDOMPurify(window);
  }

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
            <Text
              fontSize="1.2rem"
              color="brand.900"
              dangerouslySetInnerHTML={{
                __html: DOMPurify?.sanitize(description),
              }}
            />
            <Flex justify="center" marginTop={10} wrap="wrap">
              {
                <Image
                  key={offerImages?.image.id}
                  width="100%"
                  objectFit="cover"
                  src={offerImages?.image.publicUrlTransformed}
                  alt={title}
                  borderRadius="lg"
                />
              }
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
