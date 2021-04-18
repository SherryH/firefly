import { useState } from "react";
import { VStack, Flex, useDisclosure } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";

import { Offer } from "../Offer/Offer";
import OfferModal from "./OfferModal";
import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { OfferHeader } from "../Offer/OfferHeader";
import { useOffer } from "../../hooks/useOffer";

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
  const {
    isOpen,
    onClose,
    selectedOfferIndex,
    setSelectedOfferIndex,
    handleOfferClick,
  } = useOffer();

  const { data, error } = useQuery(ALL_OFFERS_QUERY);
  if (error) {
    console.log(error);
  }
  const allOffers = data?.allOffers;

  const offerProps = {
    isOpen,
    onClose,
    selectedOfferIndex,
    setSelectedOfferIndex,
    offer: allOffers?.[selectedOfferIndex],
    maxIndex: allOffers?.length - 1,
  };
  return (
    <Flex direction="column" minH="100%" h="100%">
      <HomeHeader />
      <OfferHeader
        as="h6"
        size="lg"
        marginTop="24px"
        fontWeight="normal"
        color="brand.100"
      >
        What's offering now
      </OfferHeader>

      <VStack pt="3" spacing={4} flex="1" h="100%" overflow="auto">
        {allOffers?.map(({ title, id }, index) => (
          <Offer key={id} onClick={handleOfferClick(index)}>
            {title}
          </Offer>
        ))}
      </VStack>
      <HomeFooter />

      <OfferModal {...offerProps} />
    </Flex>
  );
}
