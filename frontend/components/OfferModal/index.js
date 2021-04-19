import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import createDOMPurify from "dompurify";
import { OfferModalFooterTag } from "./OfferModalFooterTag";
import { OfferModalImage } from "./OfferModalImage";
import { OfferModalFooterNav } from "./OfferModalFooterNav";

export default function OfferModal({
  offer,
  isOpen,
  onClose,
  ...restOfferProps
}) {
  let DOMPurify;
  if (typeof window !== "undefined") {
    DOMPurify = createDOMPurify(window);
  }

  const { title, description, offerImages, owner } = offer || {};

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent h="90%">
          <ModalHeader>
            <Heading
              id="hoho"
              width="fit-content"
              bgGradient="linear(to bottom, transparent 55%, bg.100 85% 100%)"
            >
              {title}
            </Heading>
          </ModalHeader>
          <ModalBody minH="60vh">
            <Text
              fontSize="1.2rem"
              color="brand.900"
              dangerouslySetInnerHTML={{
                __html: DOMPurify?.sanitize(description),
              }}
            />
            <Flex justify="center" marginTop={10} wrap="wrap">
              {<OfferModalImage title={title} offerImages={offerImages} />}
            </Flex>
          </ModalBody>

          <ModalFooter flexDirection="column">
            <Flex justifyContent="space-between" w="100%">
              <Link href={`/userProfile/${owner?.id}`} passHref>
                <OfferModalFooterTag>User's Profile</OfferModalFooterTag>
              </Link>
              <OfferModalFooterTag>Send message</OfferModalFooterTag>
            </Flex>
            <Flex
              w="100%"
              justifyContent="space-between"
              pt="24px"
              color="brand.900"
            >
              <OfferModalFooterNav {...restOfferProps} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
