import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Heading,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import createDOMPurify from "dompurify";
import { OfferModalFooterTag } from "./OfferModalFooterTag";
import { OfferModalImage } from "./OfferModalImage";
import { disabledCssObj } from "../../lib/commonCss";

export default function OfferModal({ isOpen, onClose, ...offerProps }) {
  let DOMPurify;
  if (typeof window !== "undefined") {
    DOMPurify = createDOMPurify(window);
  }

  const {
    offer,
    setSelectedOfferIndex,
    selectedOfferIndex,
    maxIndex,
  } = offerProps;

  const { title, description, offerImages, owner } = offer || {};

  const disablePreNav = selectedOfferIndex === 0;
  const disableNextNav = selectedOfferIndex === maxIndex;

  const handleNavigationClick = (offset) => {
    const newIndex = selectedOfferIndex + offset;
    if (newIndex < 0 || newIndex > maxIndex) return;
    setSelectedOfferIndex(newIndex);
  };

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
              <Icon
                sx={disablePreNav && { ...disabledCssObj }}
                as={BiChevronLeft}
                w={10}
                h={10}
                onClick={() => handleNavigationClick(-1)}
              />
              <Icon
                sx={disableNextNav && { ...disabledCssObj }}
                as={BiChevronRight}
                w={10}
                h={10}
                onClick={() => handleNavigationClick(1)}
              />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
