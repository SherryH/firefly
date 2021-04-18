import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";

export const useOffer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(null);
  const handleOfferClick = (index) => () => {
    setSelectedOfferIndex(index);
    onOpen();
  };

  return {
    isOpen,
    onOpen,
    onClose,
    selectedOfferIndex,
    setSelectedOfferIndex,
    handleOfferClick,
  };
};
